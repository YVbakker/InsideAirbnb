#nullable disable

using Microsoft.EntityFrameworkCore.Migrations;

namespace InsideAirbnb.Migrations.InsideAirbnb
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "listings");
        }
    }
}
