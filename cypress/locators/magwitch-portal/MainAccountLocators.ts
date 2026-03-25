export default {
  addNewButton: '[type="button"]',
  MainAccountInfo: {
    sectionHeading: 'div.main__title',
    uplaodImage:
      '.ant-upload-btn [style="display: none;"][data-cy="create-main-account.logo"]',
    textFieldheading: 'div.custom-field__title.false',
    companyName: '[data-cy="create-main-account.company_name"]',
    firstName: '[data-cy="create-main-account.first_name"]',
    lastName: '[data-cy="create-main-account.last_name"]',
    contactNumber: '[data-cy="create-main-account.contact_number"]',
    contactEmail: '[data-cy="create-main-account.contact_email"]',
    contactAddress: '[data-cy="create-main-account.company_address"]',
    city: '[data-cy="create-main-account.city"]',
    stateDropdown: '[data-cy="create-main-account.state"]',
    stateInputDropdown: {
      stateSearchBar: '[data-cy="create-main-account.state.search"]',
      option: '[data-cy="option-0"]',
    },

    zipCode: '[data-cy="create-main-account.zip_code"]',
    wlAccount: '[data-cy="create-main-account.associated_main_account"]',
    appLogo: 'div.appLogo__wrapper',
    subDomain: '[data-cy="create-main-account.sub_domain"]',
    maProcessing: '[data-cy="create-main-account.ma_processing_fee"]',
  },
  BankingInfo: {
    bankName: '[data-cy="create-main-account.bank_name"]',
    legalBussinessName: '[data-cy="create-main-account.legal_business_name"]',
    accountNumber: '[data-cy="create-main-account.accounting_number"]',
    accountHolderName: '[data-cy="create-main-account.account_holder_name"]',
    routingNumber: '[data-cy="create-main-account.routing_number"]',
  },
  Buttons: {
    createButton: '[data-cy="create-main-account.submit"]',
    cancelButton: '[data-cy="create-main-account.cancel"]',
    sucessmessage: 'div[class="infoModal__container"]',
    okayButton: 'button[class="ant-btn css-l9pxc0 ant-btn-default ant-btn-color-default ant-btn-variant-outlined tab-btn active infoModal__btn only"]',
  },
  searchbar: '[data-cy="main-account.filter.search"]',
  tableItem: 'div[class="mainAccountTable_tableAllItemsData hyperlinked"]',

  mainAccountProfile: {
    companyName: '[data-cy="view-main-account.company_name"]',
    accountId: '[data-cy="view-main-account.item_id"]',
    accountStatus: '[data-cy="view-main-account.status"]',
    resendButton: '[data-cy="view-main-account.resend-btn"]',
    AccountHolderInformation: {
      editButton:
        '[data-cy="view-main-account.edit-btn.account_holder_information"]',
      firstName: '[data-cy="view-main-account.first_name"]',
      lastName: '[data-cy="view-main-account.last_name"]',
      contactNumber: '[data-cy="view-main-account.contact_number"]',
      contactEmail: '[data-cy="view-main-account.contact_email"]',
      EditDetails: {
        firstName:
          '[data-cy="edit-account-holder-information-main-account.first_name"]',
        lastName:
          '[data-cy="edit-account-holder-information-main-account.last_name"]',
        contactNumber:
          '[data-cy="edit-account-holder-information-main-account.contact_number"]',
        contactEmail:
          '[data-cy="edit-account-holder-information-main-account.contact_email"]',
        canelButton:
          '[data-cy="edit-account-holder-information-main-account.cancel"]',
        saveButton:
          '[data-cy="edit-account-holder-information-main-account.submit"]',
      },
    },

    CompanyInformation: {
      editButton: '[data-cy="view-main-account.edit-btn.company_information"]',
      companyAddress: '[data-cy="view-main-account.company_address"]',
      city: '[data-cy="view-main-account.city"]',
      state: '[data-cy="view-main-account.state"]',
      zipCode: '[data-cy="view-main-account.zip_code"]',
      EditDetail: {
        wlSwitcher:
          '[data-cy="edit-company-information-main-account.white-labeled"]',
        deleteImage:
          '[data-cy="edit-company-information-main-account.delete_logo"]',
        uploadImageButton:
          '[data-cy="edit-company-information-main-account.upload_logo"]',
        companyName:
          '[data-cy="edit-company-information-main-account.company_name"]',
        companyAddress:
          '[data-cy="edit-company-information-main-account.company_address"]',
        city: '[data-cy="edit-company-information-main-account.city"]',
        zipCode: '[data-cy="edit-company-information-main-account.zip_code"]',
        maProcessingFee:
          '[data-cy="edit-company-information-main-account.ma_processing_fee"]',
        subDomainName:
          '[data-cy="edit-company-information-main-account.sub_domain"]',
        cancelButton:
          '[data-cy="edit-company-information-main-account.cancel"]',
        savebutton: '[data-cy="edit-company-information-main-account.submit"]',
      },
    },
    BankingInfo: {
      editButton: '[data-cy="view-main-account.edit-btn.banking_information"]',
      bankName: '[data-cy="view-main-account.bank_name"]',
      legalName: '[data-cy="view-main-account.legal_business_name"]',
      routingNumber: '[data-cy="view-main-account.routing_number"]',
      accountNumber: '[data-cy="view-main-account.accounting_number"]',
      accountHolderName: '[data-cy="view-main-account.account_holder_name"]',
      EditDetails: {
        bankName: '[data-cy="edit-banking-information.bank_name"]',
        legalBussinessName:
          '[data-cy="edit-banking-information.legal_business_name"]',
        routingNumber: '[data-cy="edit-banking-information.routing_number"]',
        accountNumber: '[data-cy="edit-banking-information.accounting_number"]',
        accountHolderName:
          '[data-cy="edit-banking-information.account_holder_name"]',
        canelButton: '[data-cy="edit-banking-information.cancel"]',
        saveButton: '[data-cy="edit-banking-information.submit"]',
      },
    },
    editModal: 'div.ant-modal-content',
    successMessage: '.ant-message-custom-content.ant-message-success',
  },
};
