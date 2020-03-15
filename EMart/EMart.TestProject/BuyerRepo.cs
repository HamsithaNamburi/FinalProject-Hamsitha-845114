using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMart.Buyerservices.Models;
using EMart.Buyerservices.Repository;


namespace EMart.TestProject
{
    [TestFixture]
    class BuyerRepo
    {
        BuyerRepository _repo;
        [SetUp]
        public void setup()
        {
            _repo = new BuyerRepository(new EMartDBContext());
        }
        [Test]
       public void TestGetAll()
        {
            var result = _repo.GetItems();
            Assert.IsNotNull(result);
            Assert.Greater(result.Count,10);
        } 
        [Test]
        public void SearchItemTest()
        {
            var result = _repo.SearchItems("samsung");
            Assert.IsNotNull(result);
            Assert.Greater(result.Count,0);
        }
        [Test]
        public void GetProfile()
        {
            var result = _repo.GETProfile(1);
            Assert.IsNotNull(result);
        }
        [Test]
        public void EditProfile()
        {
            Buyers buyer = _repo.GETProfile(1);

            buyer.Emailid = "Jack@gmail";
            _repo.EditProfile(buyer);
            Buyers buyer1 = _repo.GETProfile(1);
            Assert.AreEqual(buyer, buyer1);

        } 
        //[Test]
        //public void BuyItem()
        //{
        //    var result= _repo.SearchItems("samsung");
        //    Purchase obj=_repo.GetItems()
        //    _repo.BuyItem(obj);

        //}
        [Test]
        public void ListCategories()
        {
            var result = _repo.GetCategories("Electronics");
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void ListSucategories()
        {
            var result = _repo.GetSubCategories(2);
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void GetAll()
        {
            var result = _repo.getall(2);
            Assert.IsNotNull(result);
        }
        [Test]
        public void BuyItem()
        {
            _repo.BuyItem(new Purchase()
            {
                Id = "P085",
                BuyerId = 1,
                SellerId = 2,
                TName = "credit Card",
                ItemId =23,
                NumberOfItems = 2,
                DateTime = DateTime.Now,
                Remarks="No",
                TStatus="paid"

        });
            var result = _repo.viewcart(1);
            Assert.IsNotNull(result);
        }
        [Test]
        public void purchasehistory()
        {
            var result = _repo.PurchaseHistory(1);
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void AddToCart()
        {
            _repo.AddtoCart(new AddToCart()
            {
            Id="C0587",
        CategoryId=2,
        SubcategoryId=1,
        Price=5678,
        ItemName="Redmi",
        ItemDescription="explore",
        StockNumber=2,
        Remarks="no",
        SellerId=2,
        BuyerId=1,
        Itemid=24,
        });
        }
        [Test]
        public void Delete()
        {
        _repo.Delete("C0587");
            var result = _repo.viewcart(24);

            Assert.IsEmpty(result);

        }
        [Test]
        public void PurchaseHistory()
        {
            _repo.AddPurchaseHistrory(new Purchase()
            {
                Id = "P0076",
                BuyerId = 2,
                SellerId = 2,
                TName = "credit Card",
                ItemId =4,
                NumberOfItems = 2,
                DateTime = DateTime.Now,
                Remarks = "No",
                TStatus = "paid"

            });
            var result = _repo.viewcart(4);
            Assert.IsNotNull(result);
        }
    }
}
