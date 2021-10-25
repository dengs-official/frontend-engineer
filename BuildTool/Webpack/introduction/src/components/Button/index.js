import { isEmpty } from "@/utils/types";

function click(name) {
  if (!isEmpty(name)) {
    console.log(name);
  }
}

export default click;
