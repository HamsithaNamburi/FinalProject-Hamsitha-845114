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
   [Authorize]
    public class SellerController : ControllerBase
    {
        private readonly ISellerRepository _repo;
        public SellerController(ISellerRepository repo)
        {
            _repo = repo;
        }
        [HttpPut]
        [Route("EditProfile")]
        public IActionResult Update(Seller obj)
        {
            try
            {
                _repo.EditProfile(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetProfile/{id}")]
        public IActionResult GetProfile(int id)
        {
            try
            {
                return Ok(_repo.GetProfile(id));
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
    }
}
