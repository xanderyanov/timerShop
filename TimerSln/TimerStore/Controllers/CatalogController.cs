using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Text;
using Newtonsoft.Json;
using TimerStore.Models.ViewModels;

namespace TimerStore.Controllers
{
    public class CatalogController : BaseController
    {
        public int PageSize = 16;

        public IActionResult Brand(string id, int productPage = 1, string viewSettingsStr = null)
        {
            var products = Data.ExistingTovars;

            ViewSettingsClass viewSettings = null;
            try {
                viewSettings = JsonConvert.DeserializeObject<ViewSettingsClass>(Encoding.UTF8.GetString(Convert.FromBase64String(viewSettingsStr)));
            }
            catch {
                viewSettings = new();
            }

            ViewBag.ViewSettings = viewSettings;

            Bucket.SelectedCategory = id;
            Bucket.Title = $"Часы {id} в магазине Мир Часов XXL";

            IEnumerable<Product> Products = Data.ExistingTovars;

            Products = Products.Where(p =>
                (!viewSettings.NewOnly || p.FlagNew) &&
                (!viewSettings.SaleLeaderOnly || p.FlagSaleLeader) &&
                (string.IsNullOrEmpty(viewSettings.InexpensivePrice) || p.DiscountPrice < Double.Parse(viewSettings.InexpensivePrice)) &&
                (p.Gender == "Мужские")
            );

            Products = Products
                .Where(p => id == null || p.BrandName == id);

            Filter.CollectPageFilterValues(Products);

            Products = Products
                .Skip((productPage - 1) * PageSize)
                .Take(PageSize);

            return View("Catalog", new ProductsListViewModel
            {
                Products = Products,
                ViewSettings = viewSettings,
                PagingInfo = new PagingInfo
                {
                    CurrentPage = productPage,
                    ItemsPerPage = PageSize,
                    TotalItems = id == null ? products.Count() : products.Where(e => e.BrandName == id).Count()
                },
                CurrentCategory = id
            });
        }
        public IActionResult Index(string id, int productPage = 1, string viewSettingsStr = null)
        {

            ViewSettingsClass viewSettings = null;
            try {
                viewSettings = JsonConvert.DeserializeObject<ViewSettingsClass>(Encoding.UTF8.GetString(Convert.FromBase64String(viewSettingsStr)));
            }
            catch {
                viewSettings = new();
            }

            /*************/
            ViewData["Booo"] = new[] { 10, 20, 30 };
            ViewBag.ViewBagData = new[] { 100, 200, 300 };
            /*************/

            ViewBag.ViewSettings = viewSettings;

            IEnumerable<Product> Products = Data.ExistingTovars;

            Filter.CollectPageFilterValues(Products);

            Products = Products
                .Skip((productPage - 1) * PageSize)
                .Take(PageSize);


            return View("Catalog", new ProductsListViewModel
            {
                Products = Products,
                ViewSettings = viewSettings,
                PagingInfo = new PagingInfo
                {
                    CurrentPage = productPage,
                    ItemsPerPage = PageSize,
                    TotalItems = Data.ExistingTovars.Count()
                },
                CurrentCategory = id
            });
        }
    }
}
