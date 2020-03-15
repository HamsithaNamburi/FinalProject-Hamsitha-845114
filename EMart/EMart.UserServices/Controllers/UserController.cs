using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using EMart.UserServices.Models;
using EMart.UserServices.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace EMart.UserServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repo;
        private readonly IConfiguration configuration;
        public UserController(IUserRepository repo, IConfiguration configuration)
        {
            _repo = repo;
            this.configuration = configuration;
        }
      
        [HttpGet]
        [Route("SellerLogin/{username}/{password}")]
        public IActionResult SellerLogin(string username, string password)
        {
            Token token = null;
            try
            {
                Seller seller = _repo.SellerLogin(username, password);
                if(seller!=null)
                {
                    token = new Token() { sellerid = seller.Sid, token = GenerateJwtToken(username), message = "success" };
                }
                else
                {
                    token = new Token() { token = null, message = "unsuccess" };
                }
                return Ok(token);
            
             
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("BuyerRegister")]
        public IActionResult BuyerRegister(Buyers obj)
        {
            try
            {
                _repo.BuyerRegister(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("SellerRegister")]
        public IActionResult SellerRegister(Seller obj)

        {
            try
            {
                _repo.SellerRegister(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }

       
        //public UserController(IConfiguration configuration)
        //{
            
        //}
        [HttpGet]
        [Route("BuyerLogin/{username}/{password}")]
        public IActionResult BuyerLogin(string username, string password)
        {
            Token token = null;
            try
            {

            Buyers buyer=  _repo.BuyerLogin(username, password);
                if (buyer != null)
                {
                    token = new Token() { buyerid = buyer.Id, token = GenerateJwtToken(username), message = "success"};
                }
                else
                {
                    token = new Token() {token =null, message = "unsuccess" };
                }
                return Ok(token);

            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        private string GenerateJwtToken(string username)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, username),
                new Claim(ClaimTypes.Role,username)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);


        }
    }

    
}


