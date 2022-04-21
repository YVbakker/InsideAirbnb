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
                    listing_url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    scrape_id = table.Column<double>(type: "float", nullable: false),
                    last_scraped = table.Column<DateTime>(type: "datetime2", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    summary = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    space = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    experiences_offered = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    neighborhood_overview = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    notes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    transit = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    access = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    interaction = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    house_rules = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    thumbnail_url = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    medium_url = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    picture_url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    xl_picture_url = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    host_id = table.Column<int>(type: "int", nullable: false),
                    host_url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    host_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    host_since = table.Column<DateTime>(type: "datetime2", nullable: true),
                    host_location = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    host_about = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    host_response_time = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    host_response_rate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    host_acceptance_rate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    host_is_superhost = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    host_thumbnail_url = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    host_picture_url = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    host_neighbourhood = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    host_listings_count = table.Column<int>(type: "int", nullable: true),
                    host_total_listings_count = table.Column<int>(type: "int", nullable: true),
                    host_verifications = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    host_has_profile_pic = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    host_identity_verified = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    street = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    neighbourhood = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    neighbourhood_cleansed = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    neighbourhood_group_cleansed = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    city = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    state = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    zipcode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    market = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    smart_location = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    country_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    country = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    latitude = table.Column<double>(type: "float", nullable: true),
                    longitude = table.Column<double>(type: "float", nullable: true),
                    is_location_exact = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    property_type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    room_type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    accommodates = table.Column<int>(type: "int", nullable: true),
                    bathrooms = table.Column<double>(type: "float", nullable: true),
                    bedrooms = table.Column<int>(type: "int", nullable: true),
                    beds = table.Column<int>(type: "int", nullable: true),
                    bed_type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    amenities = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    square_feet = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    price = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    weekly_price = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    monthly_price = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    security_deposit = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    cleaning_fee = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    guests_included = table.Column<int>(type: "int", nullable: true),
                    extra_people = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    minimum_nights = table.Column<int>(type: "int", nullable: true),
                    maximum_nights = table.Column<int>(type: "int", nullable: true),
                    calendar_updated = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    has_availability = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    availability_30 = table.Column<int>(type: "int", nullable: true),
                    availability_60 = table.Column<int>(type: "int", nullable: true),
                    availability_90 = table.Column<int>(type: "int", nullable: true),
                    availability_365 = table.Column<int>(type: "int", nullable: true),
                    calendar_last_scraped = table.Column<DateTime>(type: "datetime2", nullable: true),
                    number_of_reviews = table.Column<int>(type: "int", nullable: true),
                    first_review = table.Column<DateTime>(type: "datetime2", nullable: true),
                    last_review = table.Column<DateTime>(type: "datetime2", nullable: true),
                    review_scores_rating = table.Column<int>(type: "int", nullable: true),
                    review_scores_accuracy = table.Column<int>(type: "int", nullable: true),
                    review_scores_cleanliness = table.Column<int>(type: "int", nullable: true),
                    review_scores_checkin = table.Column<int>(type: "int", nullable: true),
                    review_scores_communication = table.Column<int>(type: "int", nullable: true),
                    review_scores_location = table.Column<int>(type: "int", nullable: true),
                    review_scores_value = table.Column<int>(type: "int", nullable: true),
                    requires_license = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    license = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    jurisdiction_names = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    instant_bookable = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    is_business_travel_ready = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cancellation_policy = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    require_guest_profile_picture = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    require_guest_phone_verification = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    calculated_host_listings_count = table.Column<int>(type: "int", nullable: false),
                    reviews_per_month = table.Column<double>(type: "float", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_listings", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "neighbourhoods",
                columns: table => new
                {
                    neighbourhood = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    neighbourhood_group = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_neighbourhoods", x => x.neighbourhood);
                });

            migrationBuilder.CreateTable(
                name: "summary-listings",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    host_id = table.Column<int>(type: "int", nullable: false),
                    host_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    neighbourhood_group = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    neighbourhood = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    latitude = table.Column<double>(type: "float", nullable: true),
                    longitude = table.Column<double>(type: "float", nullable: true),
                    room_type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    price = table.Column<int>(type: "int", nullable: true),
                    minimum_nights = table.Column<int>(type: "int", nullable: true),
                    number_of_reviews = table.Column<int>(type: "int", nullable: true),
                    last_review = table.Column<DateTime>(type: "datetime2", nullable: true),
                    reviews_per_month = table.Column<double>(type: "float", nullable: true),
                    calculated_host_listings_count = table.Column<int>(type: "int", nullable: true),
                    availability_365 = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_summary-listings", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "summary-reviews",
                columns: table => new
                {
                    listing_id = table.Column<int>(type: "int", nullable: false),
                    date = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "calendar",
                columns: table => new
                {
                    listing_id = table.Column<int>(type: "int", nullable: false),
                    date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    available = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    price = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_calendar_listings",
                        column: x => x.listing_id,
                        principalTable: "listings",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "reviews",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false),
                    listing_id = table.Column<int>(type: "int", nullable: false),
                    date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    reviewer_id = table.Column<int>(type: "int", nullable: false),
                    reviewer_name = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    comments = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_reviews", x => x.id);
                    table.ForeignKey(
                        name: "FK_reviews_listings",
                        column: x => x.listing_id,
                        principalTable: "listings",
                        principalColumn: "id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_calendar_listing_id",
                table: "calendar",
                column: "listing_id");

            migrationBuilder.CreateIndex(
                name: "IX_reviews_listing_id",
                table: "reviews",
                column: "listing_id");
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
