using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMart.AdminServices.Models;
using EMart.AdminServices.Repository;

namespace EMart.TestProject
{
    [TestFixture]
    class Admin
    {
        AdminRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new AdminRepository(new EMartDBContext());
        }
        [Test]
        public void testAddcategory()
        {
            _repo.AddCategory(new Category()
            {
                CategoryId=4,
                CategoryName="HomeAppliances",
                BriefDetails="Explore yours needs"

            });
            var result = _repo.viewCategory(3);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestAddsubcategories()
        {
            _repo.AddSubCategory(new SubCategory()
            {
                SubcategoryId=4,
                SubcategoryName="Sofa",
                CategoryId=3,
                BriefDetails="home Appliances",
                Gstper=4

            });
            var result = _repo.viewsubcategory(3);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestUpdateSubcategory()
        {
            SubCategory sub = _repo.viewsubcategory(33);
            sub.BriefDetails = "explore";
            _repo.updateSubcategory(sub);
            SubCategory sub2 = _repo.viewsubcategory(33);
            Assert.AreEqual(sub, sub2);
        }
        [Test]
        public void TestUpdateCtegory()
        {
           Category c= _repo.viewCategory(3);
            c.BriefDetails = "home";
            _repo.UpdateCategory(c);
            Category c2 = _repo.viewCategory(3);
            Assert.AreEqual(c, c2);
        }
        [Test]
        public void testListCategory()
        {
            var list = _repo.GetCategories();
            Assert.Greater(list.Count, 0);
        }
        [Test]
        public void TestListSubCategory()
        {
            var result = _repo.GetSubCategories();
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void TestDeleteCategory()
        {
             _repo.deletecategory(0);
            var result = _repo.viewCategory(0);
            Assert.IsNull(result);

        }
        [Test]
        public void TestDeleteSubCategory()
        {
            _repo.deletesubcategory(3);
            var result = _repo.viewsubcategory(3);
            Assert.IsNull(result);

        }

    }
}
