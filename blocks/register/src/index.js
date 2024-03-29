import { registerBlockType } from "@wordpress/blocks";
import edit from "./edit";
import save from "./save";
import "./styles.scss";

registerBlockType("plz/register", {
    title: "Register",
    category: "widgets",
    icon: "admin-users",
    attributes: {
        title: {
            source: "html",
            selector: "h1",
            default: "Register"
        },
        nameLabel: {
            type: "string",
            default: "Name"
        },
        emailLabel: {
            type: "string",
            default: "Email"
        },
        passLabel: {
            type: "string",
            default: "Password"
        },
        text: {
            source: "html",
            selector: "p"
        }
    },
    styles: [
        {
            name: "light",
            label: "Light Mode",
            isDefault: true
        },
        {
            name: "dark",
            label: "Dark Mode"
        }
    ],
    edit,
    save
});