﻿using Microsoft.AspNetCore.Mvc;
using TimerStore.Models.ViewModels;
using System.Text;
using static System.Net.Mime.MediaTypeNames;

namespace TimerStore.Controllers
{
    public class HomeController : Controller
    {
        public int PageSize = 4;
        public IActionResult Index(int productPage = 1)
        {

            IEnumerable<Product> Products = Data.ExistingTovars;

            return View(new ProductsListViewModel
            {
                Products = Products
                    .Skip((productPage - 1) * PageSize)
                    .Take(PageSize),
                PagingInfo = new PagingInfo
                    {
                        CurrentPage = productPage,
                        ItemsPerPage = PageSize,
                        TotalItems = Products.Count()
                    }
                //CurrentCategory = id
            });


        }


    }
}



