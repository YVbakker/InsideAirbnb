using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InsideAirbnb.Migrations.Application
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "calendar");

            migrationBuilder.DropTable(
                name: "neighbourhoods");

            migrationBuilder.DropTable(
                name: "reviews");

            migrationBuilder.DropTable(
                name: "summary-listings");

            migrationBuilder.DropTable(
                name: "summary-reviews");

            migrationBuilder.DropTable(
                name: "listings");
        }
    }
}
