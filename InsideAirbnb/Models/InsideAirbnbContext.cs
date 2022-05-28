using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace InsideAirbnb.Models
{
    public class InsideAirbnbContext : DbContext
    {
        public InsideAirbnbContext()
        {
        }

        public InsideAirbnbContext(DbContextOptions<InsideAirbnbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Listing> Listings { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Listing>(entity =>
            {
                entity.ToTable("listings");

                entity.Property(e => e.Accommodates).HasColumnName("accommodates");

                entity.Property(e => e.Amenities)
                    .IsUnicode(false)
                    .HasColumnName("amenities");

                entity.Property(e => e.Availability30).HasColumnName("availability_30");

                entity.Property(e => e.Availability365).HasColumnName("availability_365");

                entity.Property(e => e.Availability60).HasColumnName("availability_60");

                entity.Property(e => e.Availability90).HasColumnName("availability_90");

                entity.Property(e => e.Bathrooms)
                    .IsUnicode(false)
                    .HasColumnName("bathrooms");

                entity.Property(e => e.BathroomsText)
                    .IsUnicode(false)
                    .HasColumnName("bathrooms_text");

                entity.Property(e => e.Bedrooms).HasColumnName("bedrooms");

                entity.Property(e => e.Beds).HasColumnName("beds");

                entity.Property(e => e.CalculatedHostListingsCount).HasColumnName("calculated_host_listings_count");

                entity.Property(e => e.CalculatedHostListingsCountEntireHomes).HasColumnName("calculated_host_listings_count_entire_homes");

                entity.Property(e => e.CalculatedHostListingsCountPrivateRooms).HasColumnName("calculated_host_listings_count_private_rooms");

                entity.Property(e => e.CalculatedHostListingsCountSharedRooms).HasColumnName("calculated_host_listings_count_shared_rooms");

                entity.Property(e => e.CalendarLastScraped)
                    .IsUnicode(false)
                    .HasColumnName("calendar_last_scraped");

                entity.Property(e => e.CalendarUpdated)
                    .IsUnicode(false)
                    .HasColumnName("calendar_updated");

                entity.Property(e => e.Description)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.FirstReview)
                    .IsUnicode(false)
                    .HasColumnName("first_review");

                entity.Property(e => e.HasAvailability)
                    .IsUnicode(false)
                    .HasColumnName("has_availability");

                entity.Property(e => e.HostAbout)
                    .IsUnicode(false)
                    .HasColumnName("host_about");

                entity.Property(e => e.HostAcceptanceRate)
                    .IsUnicode(false)
                    .HasColumnName("host_acceptance_rate");

                entity.Property(e => e.HostHasProfilePic)
                    .IsUnicode(false)
                    .HasColumnName("host_has_profile_pic");

                entity.Property(e => e.HostId).HasColumnName("host_id");

                entity.Property(e => e.HostIdentityVerified)
                    .IsUnicode(false)
                    .HasColumnName("host_identity_verified");

                entity.Property(e => e.HostIsSuperhost)
                    .IsUnicode(false)
                    .HasColumnName("host_is_superhost");

                entity.Property(e => e.HostListingsCount).HasColumnName("host_listings_count");

                entity.Property(e => e.HostLocation)
                    .IsUnicode(false)
                    .HasColumnName("host_location");

                entity.Property(e => e.HostName)
                    .IsUnicode(false)
                    .HasColumnName("host_name");

                entity.Property(e => e.HostNeighbourhood)
                    .IsUnicode(false)
                    .HasColumnName("host_neighbourhood");

                entity.Property(e => e.HostPictureUrl)
                    .IsUnicode(false)
                    .HasColumnName("host_picture_url");

                entity.Property(e => e.HostResponseRate)
                    .IsUnicode(false)
                    .HasColumnName("host_response_rate");

                entity.Property(e => e.HostResponseTime)
                    .IsUnicode(false)
                    .HasColumnName("host_response_time");

                entity.Property(e => e.HostSince)
                    .IsUnicode(false)
                    .HasColumnName("host_since");

                entity.Property(e => e.HostThumbnailUrl)
                    .IsUnicode(false)
                    .HasColumnName("host_thumbnail_url");

                entity.Property(e => e.HostTotalListingsCount).HasColumnName("host_total_listings_count");

                entity.Property(e => e.HostUrl)
                    .IsUnicode(false)
                    .HasColumnName("host_url");

                entity.Property(e => e.HostVerifications)
                    .IsUnicode(false)
                    .HasColumnName("host_verifications");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.InstantBookable)
                    .IsUnicode(false)
                    .HasColumnName("instant_bookable");

                entity.Property(e => e.LastReview)
                    .IsUnicode(false)
                    .HasColumnName("last_review");

                entity.Property(e => e.LastScraped)
                    .IsUnicode(false)
                    .HasColumnName("last_scraped");

                entity.Property(e => e.Latitude).HasColumnName("latitude");

                entity.Property(e => e.License)
                    .IsUnicode(false)
                    .HasColumnName("license");

                entity.Property(e => e.ListingUrl)
                    .IsUnicode(false)
                    .HasColumnName("listing_url");

                entity.Property(e => e.Longitude).HasColumnName("longitude");

                entity.Property(e => e.MaximumMaximumNights).HasColumnName("maximum_maximum_nights");

                entity.Property(e => e.MaximumMinimumNights).HasColumnName("maximum_minimum_nights");

                entity.Property(e => e.MaximumNights).HasColumnName("maximum_nights");

                entity.Property(e => e.MaximumNightsAvgNtm).HasColumnName("maximum_nights_avg_ntm");

                entity.Property(e => e.MinimumMaximumNights).HasColumnName("minimum_maximum_nights");

                entity.Property(e => e.MinimumMinimumNights).HasColumnName("minimum_minimum_nights");

                entity.Property(e => e.MinimumNights).HasColumnName("minimum_nights");

                entity.Property(e => e.MinimumNightsAvgNtm).HasColumnName("minimum_nights_avg_ntm");

                entity.Property(e => e.Name)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.NeighborhoodOverview)
                    .IsUnicode(false)
                    .HasColumnName("neighborhood_overview");

                entity.Property(e => e.Neighbourhood)
                    .IsUnicode(false)
                    .HasColumnName("neighbourhood");

                entity.Property(e => e.NeighbourhoodCleansed)
                    .IsUnicode(false)
                    .HasColumnName("neighbourhood_cleansed");

                entity.Property(e => e.NeighbourhoodGroupCleansed)
                    .IsUnicode(false)
                    .HasColumnName("neighbourhood_group_cleansed");

                entity.Property(e => e.NumberOfReviews).HasColumnName("number_of_reviews");

                entity.Property(e => e.NumberOfReviewsL30d).HasColumnName("number_of_reviews_l30d");

                entity.Property(e => e.NumberOfReviewsLtm).HasColumnName("number_of_reviews_ltm");

                entity.Property(e => e.PictureUrl)
                    .IsUnicode(false)
                    .HasColumnName("picture_url");

                entity.Property(e => e.Price)
                    .IsUnicode(false)
                    .HasColumnName("price");

                entity.Property(e => e.PropertyType)
                    .IsUnicode(false)
                    .HasColumnName("property_type");

                entity.Property(e => e.ReviewScoresAccuracy).HasColumnName("review_scores_accuracy");

                entity.Property(e => e.ReviewScoresCheckin).HasColumnName("review_scores_checkin");

                entity.Property(e => e.ReviewScoresCleanliness).HasColumnName("review_scores_cleanliness");

                entity.Property(e => e.ReviewScoresCommunication).HasColumnName("review_scores_communication");

                entity.Property(e => e.ReviewScoresLocation).HasColumnName("review_scores_location");

                entity.Property(e => e.ReviewScoresRating).HasColumnName("review_scores_rating");

                entity.Property(e => e.ReviewScoresValue).HasColumnName("review_scores_value");

                entity.Property(e => e.ReviewsPerMonth).HasColumnName("reviews_per_month");

                entity.Property(e => e.RoomType)
                    .IsUnicode(false)
                    .HasColumnName("room_type");

                entity.Property(e => e.ScrapeId).HasColumnName("scrape_id");
            });
        }
    }
}
