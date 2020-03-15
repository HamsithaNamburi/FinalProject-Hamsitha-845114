using System;
using System.Collections.Generic;
using System.Text;
using EMart.UserServices.Models;
using EMart.UserServices.Repositories;
using NUnit.Framework;

namespace EMart.TestProject
{
    [TestFixture]
   public  class UserRepo
    {
        UserRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new UserRepository(new EMartDBContext());
        }
        [Test]
        public void TestBuyerLogin()
        {
            Buyers buy = _repo.BuyerLogin("jack","ghjk");
            Assert.IsNotNull(buy); 
        }
        [Test]
        public void TestSellerLogin()
        {
            Seller sel = _repo.SellerLogin("James", "asdfg");
            Assert.IsNotNull(sel);
        }
        [Test]
        public void AddBuyer()
        {
            _repo.BuyerRegister(new Buyers()
            {
                Id = 24,
                Username = "jhon",
                Password = "erfedf",
                Emailid = "Jhon@sdl",
                Mobilenumber = 78653421,
                Createddatetime = System.DateTime.Now

            });
            Buyers buy = _repo.BuyerLogin("deepu", "erfedf");
            Assert.IsNotNull(buy);

        }
        [Test]
        public void SellerRegister()
        {
            _repo.SellerRegister(new Seller()
            {
                Sid=87,
        Username= "wills",
        Password= "rtfgcv",
        Companyname="samsung",
        Gstin="gst666775434",
        Briefaboutcompany="explore",
        PostalAddress="H-no:1-65",
         Website="samsung.com",
        Emailid= "sam@gmail",
        Contactnumber=786902345

        });
            Seller sel = _repo.SellerLogin("wills", "rtfgcv");
            Assert.IsNotNull(sel);
        }

    }
}
