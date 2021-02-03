using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace EFCore.Legado
{
    public partial class HeroAppContext : DbContext
    {
        public HeroAppContext()
        {
        }

        public HeroAppContext(DbContextOptions<HeroAppContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Arma> Armas { get; set; }
        public virtual DbSet<Batalha> Batalhas { get; set; }
        public virtual DbSet<Heroi> Herois { get; set; }
        public virtual DbSet<HeroisBatalha> HeroisBatalhas { get; set; }
        public virtual DbSet<IdentidadeSecretum> IdentidadeSecreta { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
               optionsBuilder.UseSqlServer("Password=senha123@;Persist Security Info=True;User ID=sa;Initial Catalog=HeroApp;Data Source=localhost,1433");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Arma>(entity =>
            {
                entity.HasIndex(e => e.HeroiId, "IX_Armas_HeroiId");

                entity.HasOne(d => d.Heroi)
                    .WithMany(p => p.Armas)
                    .HasForeignKey(d => d.HeroiId);
            });

            modelBuilder.Entity<HeroisBatalha>(entity =>
            {
                entity.HasKey(e => new { e.BatalhaId, e.HeroiId });

                entity.HasIndex(e => e.HeroiId, "IX_HeroisBatalhas_HeroiId");

                entity.HasOne(d => d.Batalha)
                    .WithMany(p => p.HeroisBatalhas)
                    .HasForeignKey(d => d.BatalhaId);

                entity.HasOne(d => d.Heroi)
                    .WithMany(p => p.HeroisBatalhas)
                    .HasForeignKey(d => d.HeroiId);
            });

            modelBuilder.Entity<IdentidadeSecretum>(entity =>
            {
                entity.HasIndex(e => e.HeroiId, "IX_IdentidadeSecreta_HeroiId")
                    .IsUnique();

                entity.HasOne(d => d.Heroi)
                    .WithOne(p => p.IdentidadeSecretum)
                    .HasForeignKey<IdentidadeSecretum>(d => d.HeroiId);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
