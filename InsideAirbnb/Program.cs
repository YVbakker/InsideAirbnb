using InsideAirbnb.Services;
using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using InsideAirbnb.Areas.Identity;
using InsideAirbnb.Models;

var builder = WebApplication.CreateBuilder(args);
var applicationConnectionString = builder.Configuration.GetConnectionString("InsideAirbnb") ?? throw new InvalidOperationException("Connection string not found.");
var identityConnectionString = builder.Configuration.GetConnectionString("Identity") ?? throw new InvalidOperationException("Connection string not found.");

// Add services to the container.
builder.Services.AddDbContext<IdentityContext>(options =>
    options.UseSqlServer(identityConnectionString));
builder.Services.AddDbContext<InsideAirbnbContext>(options =>
    options.UseSqlServer(applicationConnectionString));

builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<IdentityContext>();

builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();
builder.Services.AddScoped<AuthenticationStateProvider, RevalidatingIdentityAuthenticationStateProvider<IdentityUser>>();
builder.Services.AddScoped<IListingsService, ListingsService>();
builder.Services.AddScoped<IMapboxService, MapboxService>();

var app = builder.Build();

var scope = app.Services.CreateScope();
var insideAirbnbContext = scope.ServiceProvider.GetRequiredService<InsideAirbnbContext>();
if (insideAirbnbContext.Database.GetPendingMigrations().Any())
{
    insideAirbnbContext.Database.Migrate();
}

var identityContext = scope.ServiceProvider.GetRequiredService<IdentityContext>();
if (identityContext.Database.GetPendingMigrations().Any())
{
    identityContext.Database.Migrate();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapBlazorHub();
app.MapFallbackToPage("/_Host");

app.Run();
