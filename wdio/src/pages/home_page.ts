import { baseUrl } from "../support/constants";
import { Element } from "../support/element";
import { ElementArray } from "../support/elementArray";
import { BasePage } from "./base_page";

class HomePage extends BasePage {
    constructor() {
        super();

        this.url = baseUrl;

        this.pageIdentifier = this.emailInput

        this.inputs = {
            "Email": this.emailInput
        }
    }

    get emailInput() {
        return new Element("#user_email");
    }

    get navigationLinks() {
        return new ElementArray("div.sub-nav-mktg div.flex-auto a");
    }
}

export const homePage = new HomePage();
