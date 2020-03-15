using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMart.Sellerservice.Models;
using EMart.Sellerservice.Repository;

namespace EMart.TestProject
{
    [TestFixture]
    class SellerRepo
    {
        SellerRepository _repo;
        ItemRepository _repo2;
        [SetUp]
        public void Setup()
        {
            _repo = new SellerRepository(new EMartDBContext());
            _repo2 = new ItemRepository(new EMartDBContext());
        }
        [Test]
        public void TestGetProfile()
        {
            var result = _repo.GetProfile(2);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestEditProfile()
        {
            Seller sel = _repo.GetProfile(2);
            sel.Emailid = "James@gmail.com";
            _repo.EditProfile(sel);
            Seller sel2 = _repo.GetProfile(2);
            Assert.AreEqual(sel, sel2);

        }
        [Test]
        public void TestAddItems()
        {
            _repo2.AddItems(new Items()
            {
                Id=78,
                CategoryId=3,
                SubcategoryId=1,
                ItemName="Chairs",
                ItemDescription="gdhfdhdsf",
                Price=6745,
                StockNumber=32,
                Remarks="no",
                SellerId=2,
                Image="P1.PNG"
            });
            var result = _repo2.ViewItems(32);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestGetItem()
        {
            var result = _repo2.GetItems("lenova");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestGetItems()
        {
            var result = _repo2.GetItembyId(22);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestGetItemsList()
        {
            var result = _repo2.GetItem(24);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestSubCategoryList()
        {
            var result = _repo2.GetSubCategory(2);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestUpdateItem()
        {
            Items item = _repo2.GetItembyId(5);
            item.CategoryId = 2;
            item.SubcategoryId = 1;
            _repo2.UpdateItem(item);
            Items item2 = _repo2.GetItembyId(5);
            Assert.AreEqual(item, item2);
        }
        [Test]
        public void TestDeleteItem()
        {
            _repo2.DeleteItem(22);
            var result = _repo2.GetItem(22);
            Assert.IsNull(result);
        }
    }
}
