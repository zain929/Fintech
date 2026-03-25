import { Dropdown } from "antd";
import { existingFormFound } from "../../pageObjects/magwitch-clientFE/commanPage";

export default {
    placeholder: 'label.label.as-placeholder',
    title: 'div[class="title font-public "]',
    loadingSpinner: 'div[class="flex flex-col items-center text-center max-[830px]:items-center max-[830px]:mt-4 [&>p]:max-md:text-left"]',
    subTitle: 'p.subtitle',
        logo: 'div[class="relative"]',
        disclosure: {
            openButton: '[class="flex items-center gap-1 text-[16px] cursor-pointer text-gray-400 mb-[10px] mt-[30px] max-[830px]:mb-[5px] max-[830px]:mt-[15px]"]',
            modal: 'div[class="ant-modal-content"]',
            crossButton: 'button[class="ant-modal-close"]',
        },
    FirstScreen: {
        form: 'div[class="wrapper w-full max-w-[817px] mx-auto"]',
        logo: 'img[alt="Logo"]',
        subTitle: 'h3[class="subtitle"]',
        product:  'input#loan_product_id',
        firstName: 'input#first_name',
        lastName: 'input#last_name',
        address: 'input#street_address',
        addressOption: '.street-content',
        ssn: 'input#ssn',
        dateOfBirth: 'input#date_of_birth',
        phoneNumber: 'input#phone', 
        emailField: '#email',
        confirmationEmail: '#email_confirmation',
        nextButton: 'Next',

    },
    Otp: {
        popUp: '.flex-col > :nth-child(3)',
        logo: 'div > img[alt="Logo"]',
        discloureButton: '[class*="flex items-center gap"]',
        title: 'div[class="title font-public "]',
        subtitle: 'p[class*="subtitle"]',
        text: 'div[class*="text-gray"]',

    },
    ExistingFormFound:{
        popUp: '[class*="wrapper"]',
        logo: 'div > img[alt="Logo"]',
        title: 'div[class*="title font-public"]',
        subTitle: 'p[class="subtitle w-full"]',
        continueButton: 'button[type="button"]'        
    },
    SecondForm: {
        financingAmount: 'input[aria-valuemax="300000"].ant-input-number-input',
        PropertyStatus:{
            button:'.ant-radio-button-wrapper',
            checkbox: 'input[id="property_status_checkbox"]'
        },
        annualIncome: 'input[aria-valuemax="1000000"].ant-input-number-input',
        employmentStatus:{
            Dropdown:{
                field:'input[id="employment_status"]',
                list: '[class="rc-virtual-list-holder"]',
                selection: 'div[class="ant-select-item-option-content"]'
            }

        },
        termsCheckBox: '[id="checkbox"]',
        submitButton: '[type="submit"]'
    },
    Offers:{
        popUp: 'div[class*="wrapper w-[1110px]"]',
        discloureButton: 'span[class*="flex items-center gap-1 text-[16px]"]',
        progressbar: 'div[class="flex items-center justify-center px-4 w-full max-w-[480px] w-full"]',
        appLocked:{
            Title: 'div[class="text-[28px] mb-5 font-medium text-center"]',
            text: 'div[class*="text-[14px] max-w-[480px]"]',
        },
        lender:{
            Us:{
                loanTitle: 'span.loanTitle',
                details:'div[class="qualifiedDetailsItem"]',
                CheckEligibilityScreen:{
                    title: 'div[class="title font-public "]',
                    subTitle: '[class="subtitle"]',
                    document: '[class*="border border"]',
                    country:{
                        Title: 'div[class="flex items-center gap-[9px]"]',
                        Dropdown:{
                            field: 'div[class="ant-select-selector"]',
                            list: 'div[class="rc-virtual-list-holder-inner"]',
                            selection:'div[class="ant-select-item-option-content"]',
                        }
                    },
                    Buttons:{
                        Agree: 'button[type="submit"]'  
                    }

            }
        }
    }
}}