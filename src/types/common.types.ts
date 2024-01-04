import { Dropdowns } from "@/utils/constants";

export type RequestMethods = {
    Get: 'get',
    Post: 'post'
}

export type SearchDropdown = {
    _id: string,
    label: string
}

export type DropdownOptions = keyof typeof Dropdowns;
