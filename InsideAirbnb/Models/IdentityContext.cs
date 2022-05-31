using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace InsideAirbnb.Models;

public class IdentityContext : IdentityDbContext
{
    public IdentityContext(DbContextOptions<IdentityContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.Entity<IdentityRole>().HasData(
            new IdentityRole
            {
                Id = "e7bbfecc-eeda-46df-b5f5-3cdcb5d7b4db",
                ConcurrencyStamp = "839df573-c92a-4a80-b4cb-70f5daeab31e",
                Name = "Administrator",
                NormalizedName = "ADMINISTRATOR"
            },
            new IdentityRole
            {
                Id = "22f817cc-f207-4a24-b995-3abf46b59d1d",
                ConcurrencyStamp = "79bc8c61-dbb6-4f39-9ed8-6d4cd3266f05",
                Name = "User",
                NormalizedName = "USER"
            }
        );
    }
}