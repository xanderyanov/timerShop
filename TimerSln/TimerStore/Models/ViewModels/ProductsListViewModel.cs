using static TimerStore.BaseController;

namespace TimerStore.Models.ViewModels
{
    public class ProductsListViewModel
    {
        public IEnumerable<Product> Products { get; set; }
        public PagingInfo PagingInfo { get; set; }
        public string CurrentCategory { get; set; }

        public ViewSettingsClass ViewSettings { get; set; }
    }
}
