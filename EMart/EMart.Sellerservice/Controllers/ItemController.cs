using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.Sellerservice.Models;
using EMart.Sellerservice.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EMart.Sellerservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepository _repo;
        public ItemController(IItemRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddItems")]
        public IActionResult AddItems(Items obj)
        {
            try
            {
                _repo.AddItems(obj);
                return Ok();
            } catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }

        }

        [HttpPut]
        [Route("UpdateItem")]
        public IActionResult UpdateItem(Items obj)
        {
            try
            {
                _repo.UpdateItem(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetItem/{id}")]
        public IActionResult GetItem(int id)
        {
            try
            {

                return Ok(_repo.GetItem(id));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        } 
        [HttpDelete]
        [Route("Delete/{id}")]
        public IActionResult DeleteItem(int id)
        {
            try
            {
                _repo.DeleteItem(id);
                return Ok();
            }catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("ViewItems/{sellerId}")]
        public IActionResult ViewItem(int sellerId)
        {
            try
            {
                return Ok(_repo.ViewItems(sellerId));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategoryById/{id}")]
        public IActionResult GetSubCategoryById(int id)
        {
            try
            {
               

                return Ok(_repo.GetSubCategory(id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Getname/{name}")]
        public IActionResult Getname(string name)
        {
            try
            {
               
                return Ok(_repo.GetItems(name));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}