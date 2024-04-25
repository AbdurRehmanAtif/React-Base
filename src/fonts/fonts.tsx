class Fonts {

    regularText(): string {
        return "text-[#616c71] text-[16px] leading-6  font-['fresh-sans-regular']"
    }
    boldText(): string {
        return "text-base text-[#3a474e] leading-4 font-['fresh-sans-medium']"
    }
    sidebarHeaderText(): string {
        return " font-['fresh-sans-medium'] text-2xl text-[#3a474e]"
    }


}

export default new Fonts();