import en from "../../lang/eng.json";
import de from "../../lang/de.json";

export default class Language {

    // function that does the magic export that function 
    constructor(lang){
        this.setLang(lang);
    }
    setLang(lang){
        switch(lang){
            case "en": this.lang = en; break;
            case "de": this.lang = de; break;
            default: this.lang = en;
        }    
    }

    translation = (field) => {
        try {
            return this.lang[field];
        }
        catch (e) {
            return field
        }
    }

}