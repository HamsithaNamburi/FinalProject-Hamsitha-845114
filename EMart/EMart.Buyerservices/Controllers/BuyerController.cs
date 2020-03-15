using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.Buyerservices.Models;
using EMart.Buyerservices.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EMart.Buyerservices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BuyerController : ControllerBase
    {
        private IBuyerRepository _repo;
        public BuyerController(IBuyerRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("GetProfile/{id}")]
        public IActionResult GetProfile(int id)
        {
            try
            {
                
                return Ok(_repo.GETProfile(id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

        }
        [HttpPut]
        [Route("EditProfile")]
        public IActionResult EditProfile(Buyers obj)
        {
            try
            {
                _repo.EditProfile(obj);
                return Ok();
            }catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("SearchItems/{name}")]
        public IActionResult SearchItem(string name)
        {
            try
            {
              return Ok(_repo.SearchItems(name));
            }catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("BuyItem")]
        public  IActionResult BuyItem(Purchase obj)
        {
            try
            {
                _repo.BuyItem(obj);
                return Ok();
            }catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("PurchaseHistory/{id}")]
        public IActionResult PurchaseHistory(int id)
        {
            try
            {
               
                return Ok(_repo.PurchaseHistory(id));
            }catch(Exception e)
            {
                return NotFound(e.Message);
            }

        }
        [HttpGet]
        [Route("GetCategory/{name}")]
        public IActionResult GetCategory(string name)
        {
            try
            {
               
                return Ok(_repo.GetCategories(name));
            }catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategory/{id}")]
        public IActionResult GetSubCategory(int id)
        {
            try
            {
               
                return Ok(_repo.GetSubCategories(id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("AddPurchaseHistory")]
        public IActionResult AddPurchase(Purchase obj)
        {
            try
            {
                _repo.AddPurchaseHistrory(obj);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }

        }
        [HttpPost]
        [Route("Addtocart")]
        public IActionResult AddtoCart(AddToCart obj)
        {
            try
            {
                _repo.AddtoCart(obj);

                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("ViewCart/{id}")]

        public IActionResult Viewcart(int id)
        {
            try
            {
               
                return Ok(_repo.viewcart(id));
            }
            catch(Exception e)
            {
                return NotFound(e);
            }
        }
        [HttpDelete]
        [Route("DeleteCart/{id}")]
        public IActionResult Delete(string id)
        {
            try
            {
                _repo.Delete(id);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("getproducts")]
        public IActionResult getproduct()
        {
            try {
               
                return Ok(_repo.GetItems());
            }catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("getAll/{id}")]
        public IActionResult getAll(int id)
        {
            try
            {
                return Ok(_repo.getall(id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}