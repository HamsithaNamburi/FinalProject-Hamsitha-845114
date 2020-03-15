using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.AdminServices.Models;
using EMart.AdminServices.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EMart.AdminServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _repo;
        public AdminController(IAdminRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddCategory")]
        public IActionResult AddCategory(Category obj)
        {
            try
            {
                _repo.AddCategory(obj);
                return Ok();
            }catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("AddSubCategory")]
        public IActionResult AddSubCategory(SubCategory obj)
        {
            try
            {
                _repo.AddSubCategory(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategories")]
        public IActionResult viewsubcategory()
        {
            try
            {
                return Ok(_repo.GetSubCategories());

            }catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetCategories")]
        public IActionResult viewscategory()
        {
            try
            {
                return Ok(_repo.GetCategories());

            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("Deletecategory/{id}")]
        public IActionResult Deletecategory(int id)
        {
            try
            {
                _repo.deletecategory(id);

                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteSubcategory/{id}")]
        public IActionResult Deletesubcategory(int id)
        {
            try
            {
                _repo.deletesubcategory(id);

                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("Updatecategory")]
        public IActionResult Updatecategory(Category obj)
        {
            try
            {
                _repo.UpdateCategory(obj);

                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("Updatesubcategory")]
        public IActionResult Updatesubcategory(SubCategory obj)
        {
            try
            {
                _repo.updateSubcategory(obj);

                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategoryBYId/{id}")]
        public IActionResult Viewsubcategory(int id)
        {
            try
            {
               

                return Ok(_repo.viewsubcategory(id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetCategoryBYId/{id}")]
        public IActionResult Viewcategory(int id)
        {
            try
            {


                return Ok(_repo.viewCategory(id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

    }

}

