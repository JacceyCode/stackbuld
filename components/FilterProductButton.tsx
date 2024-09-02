import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilteredProductButton = ({ setCategory }: FilterProductButtonProp) => {
  return (
    <Select onValueChange={(value) => setCategory(value)}>
      <SelectTrigger className="w-[13rem] bg-transparent border-2 border-background">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent className="bg-background2">
        <SelectItem className="hover:bg-white rounded-md" value="all">
          All
        </SelectItem>
        <SelectItem
          className="hover:bg-white rounded-md"
          value="men's clothing"
        >
          Male
        </SelectItem>
        <SelectItem
          className="hover:bg-white rounded-md"
          value="women's clothing"
        >
          Female
        </SelectItem>
        <SelectItem className="hover:bg-white rounded-md" value="jewelery">
          Jewelry
        </SelectItem>
        <SelectItem className="hover:bg-white rounded-md" value="electronics">
          Electronics
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FilteredProductButton;
