﻿// <auto-generated />


#nullable disable

using System;
using InsideAirbnb.api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
namespace InsideAirbnb.Migrations
{
    [DbContext(typeof(AirBnbContext))]
    [Migration("20220421104835_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseCollation("Latin1_General_CI_AS")
                .HasAnnotation("ProductVersion", "6.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("InsideAirbnb.Models.Calendar", b =>
                {
                    b.Property<string>("Available")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)")
                        .HasColumnName("available");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2")
                        .HasColumnName("date");

                    b.Property<int>("ListingId")
                        .HasColumnType("int")
                        .HasColumnName("listing_id");

                    b.Property<string>("Price")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)")
                        .HasColumnName("price");

                    b.HasIndex("ListingId");

                    b.ToTable("calendar", (string)null);
                });

            modelBuilder.Entity("InsideAirbnb.Models.Listing", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int")
                        .HasColumnName("id");

                    b.Property<string>("Access")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("access");

                    b.Property<int?>("Accommodates")
                        .HasColumnType("int")
                        .HasColumnName("accommodates");

                    b.Property<string>("Amenities")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("amenities");

                    b.Property<int?>("Availability30")
                        .HasColumnType("int")
                        .HasColumnName("availability_30");

                    b.Property<int?>("Availability365")
                        .HasColumnType("int")
                        .HasColumnName("availability_365");

                    b.Property<int?>("Availability60")
                        .HasColumnType("int")
                        .HasColumnName("availability_60");

                    b.Property<int?>("Availability90")
                        .HasColumnType("int")
                        .HasColumnName("availability_90");

                    b.Property<double?>("Bathrooms")
                        .HasColumnType("float")
                        .HasColumnName("bathrooms");

                    b.Property<string>("BedType")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("bed_type");

                    b.Property<int?>("Bedrooms")
                        .HasColumnType("int")
                        .HasColumnName("bedrooms");

                    b.Property<int?>("Beds")
                        .HasColumnType("int")
                        .HasColumnName("beds");

                    b.Property<int>("CalculatedHostListingsCount")
                        .HasColumnType("int")
                        .HasColumnName("calculated_host_listings_count");

                    b.Property<DateTime?>("CalendarLastScraped")
                        .HasColumnType("datetime2")
                        .HasColumnName("calendar_last_scraped");

                    b.Property<string>("CalendarUpdated")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("calendar_updated");

                    b.Property<string>("CancellationPolicy")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("cancellation_policy");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("city");

                    b.Property<string>("CleaningFee")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("cleaning_fee");

                    b.Property<string>("Country")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("country");

                    b.Property<string>("CountryCode")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("country_code");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("description");

                    b.Property<string>("ExperiencesOffered")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("experiences_offered");

                    b.Property<string>("ExtraPeople")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("extra_people");

                    b.Property<DateTime?>("FirstReview")
                        .HasColumnType("datetime2")
                        .HasColumnName("first_review");

                    b.Property<int?>("GuestsIncluded")
                        .HasColumnType("int")
                        .HasColumnName("guests_included");

                    b.Property<string>("HasAvailability")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("has_availability");

                    b.Property<string>("HostAbout")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("host_about");

                    b.Property<string>("HostAcceptanceRate")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("host_acceptance_rate");

                    b.Property<string>("HostHasProfilePic")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("host_has_profile_pic");

                    b.Property<int>("HostId")
                        .HasColumnType("int")
                        .HasColumnName("host_id");

                    b.Property<string>("HostIdentityVerified")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("host_identity_verified");

                    b.Property<string>("HostIsSuperhost")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("host_is_superhost");

                    b.Property<int?>("HostListingsCount")
                        .HasColumnType("int")
                        .HasColumnName("host_listings_count");

                    b.Property<string>("HostLocation")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("host_location");

                    b.Property<string>("HostName")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("host_name");

                    b.Property<string>("HostNeighbourhood")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("host_neighbourhood");

                    b.Property<string>("HostPictureUrl")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("host_picture_url");

                    b.Property<string>("HostResponseRate")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("host_response_rate");

                    b.Property<string>("HostResponseTime")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("host_response_time");

                    b.Property<DateTime?>("HostSince")
                        .HasColumnType("datetime2")
                        .HasColumnName("host_since");

                    b.Property<string>("HostThumbnailUrl")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("host_thumbnail_url");

                    b.Property<int?>("HostTotalListingsCount")
                        .HasColumnType("int")
                        .HasColumnName("host_total_listings_count");

                    b.Property<string>("HostUrl")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("host_url");

                    b.Property<string>("HostVerifications")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("host_verifications");

                    b.Property<string>("HouseRules")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("house_rules");

                    b.Property<string>("InstantBookable")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("instant_bookable");

                    b.Property<string>("Interaction")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("interaction");

                    b.Property<string>("IsBusinessTravelReady")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("is_business_travel_ready");

                    b.Property<string>("IsLocationExact")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("is_location_exact");

                    b.Property<string>("JurisdictionNames")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("jurisdiction_names");

                    b.Property<DateTime?>("LastReview")
                        .HasColumnType("datetime2")
                        .HasColumnName("last_review");

                    b.Property<DateTime>("LastScraped")
                        .HasColumnType("datetime2")
                        .HasColumnName("last_scraped");

                    b.Property<double?>("Latitude")
                        .HasColumnType("float")
                        .HasColumnName("latitude");

                    b.Property<string>("License")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("license");

                    b.Property<string>("ListingUrl")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("listing_url");

                    b.Property<double?>("Longitude")
                        .HasColumnType("float")
                        .HasColumnName("longitude");

                    b.Property<string>("Market")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("market");

                    b.Property<int?>("MaximumNights")
                        .HasColumnType("int")
                        .HasColumnName("maximum_nights");

                    b.Property<string>("MediumUrl")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("medium_url");

                    b.Property<int?>("MinimumNights")
                        .HasColumnType("int")
                        .HasColumnName("minimum_nights");

                    b.Property<string>("MonthlyPrice")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("monthly_price");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("name");

                    b.Property<string>("NeighborhoodOverview")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("neighborhood_overview");

                    b.Property<string>("Neighbourhood")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("neighbourhood");

                    b.Property<string>("NeighbourhoodCleansed")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("neighbourhood_cleansed");

                    b.Property<string>("NeighbourhoodGroupCleansed")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("neighbourhood_group_cleansed");

                    b.Property<string>("Notes")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("notes");

                    b.Property<int?>("NumberOfReviews")
                        .HasColumnType("int")
                        .HasColumnName("number_of_reviews");

                    b.Property<string>("PictureUrl")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("picture_url");

                    b.Property<string>("Price")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("price");

                    b.Property<string>("PropertyType")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("property_type");

                    b.Property<string>("RequireGuestPhoneVerification")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("require_guest_phone_verification");

                    b.Property<string>("RequireGuestProfilePicture")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("require_guest_profile_picture");

                    b.Property<string>("RequiresLicense")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("requires_license");

                    b.Property<int?>("ReviewScoresAccuracy")
                        .HasColumnType("int")
                        .HasColumnName("review_scores_accuracy");

                    b.Property<int?>("ReviewScoresCheckin")
                        .HasColumnType("int")
                        .HasColumnName("review_scores_checkin");

                    b.Property<int?>("ReviewScoresCleanliness")
                        .HasColumnType("int")
                        .HasColumnName("review_scores_cleanliness");

                    b.Property<int?>("ReviewScoresCommunication")
                        .HasColumnType("int")
                        .HasColumnName("review_scores_communication");

                    b.Property<int?>("ReviewScoresLocation")
                        .HasColumnType("int")
                        .HasColumnName("review_scores_location");

                    b.Property<int?>("ReviewScoresRating")
                        .HasColumnType("int")
                        .HasColumnName("review_scores_rating");

                    b.Property<int?>("ReviewScoresValue")
                        .HasColumnType("int")
                        .HasColumnName("review_scores_value");

                    b.Property<double?>("ReviewsPerMonth")
                        .HasColumnType("float")
                        .HasColumnName("reviews_per_month");

                    b.Property<string>("RoomType")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("room_type");

                    b.Property<double>("ScrapeId")
                        .HasColumnType("float")
                        .HasColumnName("scrape_id");

                    b.Property<string>("SecurityDeposit")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("security_deposit");

                    b.Property<string>("SmartLocation")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("smart_location");

                    b.Property<string>("Space")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("space");

                    b.Property<string>("SquareFeet")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("square_feet");

                    b.Property<string>("State")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("state");

                    b.Property<string>("Street")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("street");

                    b.Property<string>("Summary")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("summary");

                    b.Property<string>("ThumbnailUrl")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("thumbnail_url");

                    b.Property<string>("Transit")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("transit");

                    b.Property<string>("WeeklyPrice")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("weekly_price");

                    b.Property<string>("XlPictureUrl")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("xl_picture_url");

                    b.Property<string>("Zipcode")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("zipcode");

                    b.HasKey("Id");

                    b.ToTable("listings", (string)null);
                });

            modelBuilder.Entity("InsideAirbnb.Models.Neighbourhood", b =>
                {
                    b.Property<string>("Neighbourhood1")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)")
                        .HasColumnName("neighbourhood");

                    b.Property<string>("NeighbourhoodGroup")
                        .HasMaxLength(1)
                        .HasColumnType("nvarchar(1)")
                        .HasColumnName("neighbourhood_group");

                    b.HasKey("Neighbourhood1");

                    b.ToTable("neighbourhoods", (string)null);
                });

            modelBuilder.Entity("InsideAirbnb.Models.Review", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int")
                        .HasColumnName("id");

                    b.Property<string>("Comments")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("comments");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2")
                        .HasColumnName("date");

                    b.Property<int>("ListingId")
                        .HasColumnType("int")
                        .HasColumnName("listing_id");

                    b.Property<int>("ReviewerId")
                        .HasColumnType("int")
                        .HasColumnName("reviewer_id");

                    b.Property<string>("ReviewerName")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)")
                        .HasColumnName("reviewer_name");

                    b.HasKey("Id");

                    b.HasIndex("ListingId");

                    b.ToTable("reviews", (string)null);
                });

            modelBuilder.Entity("InsideAirbnb.Models.SummaryListing", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int")
                        .HasColumnName("id");

                    b.Property<int?>("Availability365")
                        .HasColumnType("int")
                        .HasColumnName("availability_365");

                    b.Property<int?>("CalculatedHostListingsCount")
                        .HasColumnType("int")
                        .HasColumnName("calculated_host_listings_count");

                    b.Property<int>("HostId")
                        .HasColumnType("int")
                        .HasColumnName("host_id");

                    b.Property<string>("HostName")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("host_name");

                    b.Property<DateTime?>("LastReview")
                        .HasColumnType("datetime2")
                        .HasColumnName("last_review");

                    b.Property<double?>("Latitude")
                        .HasColumnType("float")
                        .HasColumnName("latitude");

                    b.Property<double?>("Longitude")
                        .HasColumnType("float")
                        .HasColumnName("longitude");

                    b.Property<int?>("MinimumNights")
                        .HasColumnType("int")
                        .HasColumnName("minimum_nights");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("name");

                    b.Property<string>("Neighbourhood")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("neighbourhood");

                    b.Property<string>("NeighbourhoodGroup")
                        .HasMaxLength(1)
                        .HasColumnType("nvarchar(1)")
                        .HasColumnName("neighbourhood_group");

                    b.Property<int?>("NumberOfReviews")
                        .HasColumnType("int")
                        .HasColumnName("number_of_reviews");

                    b.Property<int?>("Price")
                        .HasColumnType("int")
                        .HasColumnName("price");

                    b.Property<double?>("ReviewsPerMonth")
                        .HasColumnType("float")
                        .HasColumnName("reviews_per_month");

                    b.Property<string>("RoomType")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("room_type");

                    b.HasKey("Id");

                    b.ToTable("summary-listings", (string)null);
                });

            modelBuilder.Entity("InsideAirbnb.Models.SummaryReview", b =>
                {
                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2")
                        .HasColumnName("date");

                    b.Property<int>("ListingId")
                        .HasColumnType("int")
                        .HasColumnName("listing_id");

                    b.ToTable("summary-reviews", (string)null);
                });

            modelBuilder.Entity("InsideAirbnb.Models.Calendar", b =>
                {
                    b.HasOne("InsideAirbnb.Models.Listing", "Listing")
                        .WithMany()
                        .HasForeignKey("ListingId")
                        .IsRequired()
                        .HasConstraintName("FK_calendar_listings");

                    b.Navigation("Listing");
                });

            modelBuilder.Entity("InsideAirbnb.Models.Review", b =>
                {
                    b.HasOne("InsideAirbnb.Models.Listing", "Listing")
                        .WithMany("Reviews")
                        .HasForeignKey("ListingId")
                        .IsRequired()
                        .HasConstraintName("FK_reviews_listings");

                    b.Navigation("Listing");
                });

            modelBuilder.Entity("InsideAirbnb.Models.Listing", b =>
                {
                    b.Navigation("Reviews");
                });
#pragma warning restore 612, 618
        }
    }
}
