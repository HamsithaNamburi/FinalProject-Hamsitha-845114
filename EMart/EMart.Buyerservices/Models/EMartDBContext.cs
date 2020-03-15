using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EMart.Buyerservices.Models
{
    public partial class EMartDBContext : DbContext
    {
        public EMartDBContext()
        {
        }

        public EMartDBContext(DbContextOptions<EMartDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AddToCart> AddToCart { get; set; }
        public virtual DbSet<Buyers> Buyers { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Discounts> Discounts { get; set; }
        public virtual DbSet<Items> Items { get; set; }
        public virtual DbSet<Purchase> Purchase { get; set; }
        public virtual DbSet<Seller> Seller { get; set; }
        public virtual DbSet<SubCategory> SubCategory { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-PR494SQ\\SQLEXPRESS;Initial Catalog=EMartDB;User ID=sa;Password=pass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AddToCart>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerId).HasColumnName("buyer_id");

                entity.Property(e => e.CategoryId).HasColumnName("category_id");

                entity.Property(e => e.Image)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.ItemDescription)
                    .HasColumnName("item_description")
                    .HasMaxLength(90)
                    .IsUnicode(false);

                entity.Property(e => e.ItemName)
                    .HasColumnName("item_name")
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.Itemid).HasColumnName("itemid");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerId).HasColumnName("seller_id");

                entity.Property(e => e.StockNumber).HasColumnName("stock_number");

                entity.Property(e => e.SubcategoryId).HasColumnName("subcategory_id");

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.AddToCart)
                    .HasForeignKey(d => d.BuyerId)
                    .HasConstraintName("FK__AddToCart__buyer__4CA06362");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.AddToCart)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__AddToCart__categ__49C3F6B7");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.AddToCart)
                    .HasForeignKey(d => d.Itemid)
                    .HasConstraintName("FK__AddToCart__itemi__5AEE82B9");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.AddToCart)
                    .HasForeignKey(d => d.SellerId)
                    .HasConstraintName("FK__AddToCart__selle__4BAC3F29");

                entity.HasOne(d => d.Subcategory)
                    .WithMany(p => p.AddToCart)
                    .HasForeignKey(d => d.SubcategoryId)
                    .HasConstraintName("FK__AddToCart__subca__4AB81AF0");
            });

            modelBuilder.Entity<Buyers>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Createddatetime)
                    .HasColumnName("createddatetime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Emailid)
                    .HasColumnName("emailid")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Mobilenumber).HasColumnName("mobilenumber");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.CategoryId)
                    .HasColumnName("Category_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.BriefDetails)
                    .HasColumnName("brief_details")
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryName)
                    .HasColumnName("Category_name")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Discounts>(entity =>
            {
                entity.HasKey(e => e.DId)
                    .HasName("PK__Discount__76B8FF5D3F963D27");

                entity.Property(e => e.DId)
                    .HasColumnName("D_Id")
                    .ValueGeneratedNever();

                entity.Property(e => e.DDescription)
                    .HasColumnName("D_description")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.DiscountCode)
                    .HasColumnName("Discount_code")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.EndDate)
                    .HasColumnName("end_date")
                    .HasColumnType("date");

                entity.Property(e => e.Percentage).HasColumnName("percentage");

                entity.Property(e => e.StartDate)
                    .HasColumnName("start_date")
                    .HasColumnType("date");
            });

            modelBuilder.Entity<Items>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CategoryId).HasColumnName("category_id");

                entity.Property(e => e.Image)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ItemDescription)
                    .HasColumnName("item_description")
                    .HasMaxLength(90)
                    .IsUnicode(false);

                entity.Property(e => e.ItemName)
                    .HasColumnName("item_name")
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerId).HasColumnName("seller_id");

                entity.Property(e => e.StockNumber).HasColumnName("stock_number");

                entity.Property(e => e.SubcategoryId).HasColumnName("subcategory_id");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__Items__category___1920BF5C");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.SellerId)
                    .HasConstraintName("FK__Items__seller_id__398D8EEE");

                entity.HasOne(d => d.Subcategory)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.SubcategoryId)
                    .HasConstraintName("FK__Items__subcatego__1A14E395");
            });

            modelBuilder.Entity<Purchase>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerId).HasColumnName("Buyer_id");

                entity.Property(e => e.DateTime)
                    .HasColumnName("Date_time")
                    .HasColumnType("datetime");

                entity.Property(e => e.ItemId).HasColumnName("Item_id");

                entity.Property(e => e.NumberOfItems).HasColumnName("Number_of_items");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerId).HasColumnName("Seller_id");

                entity.Property(e => e.TName)
                    .HasColumnName("T_name")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.TStatus)
                    .HasColumnName("T_status")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.Purchase)
                    .HasForeignKey(d => d.BuyerId)
                    .HasConstraintName("FK__Purchase__Buyer___1FCDBCEB");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.Purchase)
                    .HasForeignKey(d => d.ItemId)
                    .HasConstraintName("FK__Purchase__Item_i__21B6055D");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.Purchase)
                    .HasForeignKey(d => d.SellerId)
                    .HasConstraintName("FK__Purchase__Seller__20C1E124");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.HasKey(e => e.Sid)
                    .HasName("PK__Seller__3213E83FC24E3DAB");

                entity.Property(e => e.Sid)
                    .HasColumnName("sid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Briefaboutcompany)
                    .HasColumnName("briefaboutcompany")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Companyname)
                    .IsRequired()
                    .HasColumnName("companyname")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Contactnumber).HasColumnName("contactnumber");

                entity.Property(e => e.Emailid)
                    .HasColumnName("emailid")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Gstin)
                    .HasColumnName("GSTIN")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PostalAddress)
                    .HasColumnName("postal_address")
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Website)
                    .HasColumnName("website")
                    .HasMaxLength(60)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SubCategory>(entity =>
            {
                entity.Property(e => e.SubcategoryId)
                    .HasColumnName("subcategory_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.BriefDetails)
                    .HasColumnName("brief_details")
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryId).HasColumnName("category_id");

                entity.Property(e => e.Gstper)
                    .HasColumnName("GSTper")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.SubcategoryName)
                    .IsRequired()
                    .HasColumnName("subcategory_name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.SubCategory)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__SubCatego__categ__164452B1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
