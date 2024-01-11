import { LiaShippingFastSolid, LiaTagSolid } from "react-icons/lia";
import { RiRefreshLine } from "react-icons/ri";

const accordionData = [
  {
    title: "Free Flat Rate Shipping",
    content: "Estimated to be delivered on 09/01/1939 - 09/02/1945.",
    id: 1,
    svgComponent: LiaShippingFastSolid,
  },
  {
    title: "Shipping",
    content:
      "Pre-order, Made to Order items will ship on the estimated date noted on the product description page. These items will ship through Premium Express once they become available.",
    id: 2,
    svgComponent: LiaTagSolid,
  },
  {
    title: "Return Policy",
    content:
      'Returns may be made by mail or in store. You may return items by selecting"Return this Item" from your account.',
    id: 3,
    svgComponent: RiRefreshLine,
  },
];

export default accordionData;
