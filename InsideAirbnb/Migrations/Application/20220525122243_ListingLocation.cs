using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InsideAirbnb.Migrations.Application
{
    public partial class ListingLocation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "latitude",
                table: "listings");

            migrationBuilder.DropColumn(
                name: "longitude",
                table: "listings");

            migrationBuilder.CreateTable(
                name: "ListingLocations",
                columns: table => new
                {
                    ListingId = table.Column<decimal>(type: "decimal(20,0)", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Latitude = table.Column<double>(type: "float", nullable: false),
                    Longitude = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ListingLocations", x => x.ListingId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ListingLocations");

            migrationBuilder.AddColumn<double>(
                name: "latitude",
                table: "listings",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "longitude",
                table: "listings",
                type: "float",
                nullable: true);
        }
    }
}
