using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InsideAirbnb.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "listings",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false),
                    name = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    host_id = table.Column<int>(type: "int", nullable: false),
                    host_name = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    neighbourhood_group = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    neighbourhood = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    latitude = table.Column<double>(type: "float", nullable: false),
                    longitude = table.Column<double>(type: "float", nullable: false),
                    room_type = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    price = table.Column<int>(type: "int", nullable: false),
                    minimum_nights = table.Column<int>(type: "int", nullable: false),
                    number_of_reviews = table.Column<int>(type: "int", nullable: false),
                    last_review = table.Column<DateTime>(type: "date", nullable: true),
                    reviews_per_month = table.Column<double>(type: "float", nullable: true),
                    calculated_host_listings_count = table.Column<int>(type: "int", nullable: false),
                    availability_365 = table.Column<int>(type: "int", nullable: false),
                    number_of_reviews_ltm = table.Column<int>(type: "int", nullable: false),
                    license = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "neighbourhoods",
                columns: table => new
                {
                    neighbourhood_group = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    neighbourhood = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "reviews",
                columns: table => new
                {
                    listing_id = table.Column<int>(type: "int", nullable: false),
                    date = table.Column<DateTime>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "listings");

            migrationBuilder.DropTable(
                name: "neighbourhoods");

            migrationBuilder.DropTable(
                name: "reviews");
        }
    }
}
