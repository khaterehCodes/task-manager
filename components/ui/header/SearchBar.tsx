import Input from "../customInput/Input";
import Icon from "../icons/Icon";

function SearchBar() {
    return (
       <div className="w-55 h-full flex items-center justify-center gap-1 border-l border-[#999999]">
          <Icon name="search" />
          <Input
            placeholder="جستجو بین تسک‌ها"
            className="w-50 h-full outline-0 text-[12px] text-[#959595]"
          />
        </div>
    );
}

export default SearchBar;