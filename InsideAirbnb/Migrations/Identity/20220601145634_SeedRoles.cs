using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InsideAirbnb.Migrations.Identity
{
    public partial class SeedRoles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "22f817cc-f207-4a24-b995-3abf46b59d1d", "79bc8c61-dbb6-4f39-9ed8-6d4cd3266f05", "User", "USER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "e7bbfecc-eeda-46df-b5f5-3cdcb5d7b4db", "839df573-c92a-4a80-b4cb-70f5daeab31e", "Administrator", "ADMINISTRATOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "22f817cc-f207-4a24-b995-3abf46b59d1d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e7bbfecc-eeda-46df-b5f5-3cdcb5d7b4db");
        }
    }
}
