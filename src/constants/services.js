export const services =[
  
    {
      "heading": "Outpatient Management",
      "description": "Entry point for scheduling appointments with doctors for diagnosis or consultations, enhances patient care and timely decisions.",
      "modules": [
        "Visit Detail",
        "Diagnosis Detail",
        "Patient Appointments",
        "Clinical Service Detail",
        "Test and Investigation Reporting",
        "Outpatient Medical Observation Details",
        "Appointment Scheduling / Rescheduling Facility",
        "Diagnosis and Treatment History with Medicines Detail",
        "Medicines Advised and Supplied by Pharmacy",
        "Vaccine Charts"
      ]
    },
    {
      "heading": "Inpatient Management",
      "description": "Manages patient admission & transfer functions, automates administrative activities and provides access to other modules for instant patient care.",
      "modules": [
        "Patient Admission",
        "Bed Status View",
        "Patient Room Shifting",
        "Automated Discharge Summary",
        "Pre and Post Operative Diagnosis",
        "Test and Investigation Reporting",
        "Operation Theatre Scheduling",
        "Diagnosis and Treatment History",
        "IP Medical Observation",
        "Unique ID for Patient Records"
      ]
    },
    {
      "heading": "Ward Management",
      "description": "Manages all ward related information such as wards entry, room types, room numbers, bed numbers, and bed availability status.",
      "modules": [
        "Add Lab Test Group and Subgroups",
        "Add Reference Range for Each Test Category Wise",
        "Add Sample Types and Lab Units",
        "Create Profiles and Packages for Particular Tests",
        "Instant Test Allocation",
        "Add Collected Sample Detail",
        "Easy Creation of Lab Reports"
      ]
    },
    {
      "heading": "Laboratory Management System",
      "description": "Automates the process of raising investigation requests and delivering results to the concerned department/doctor.",
      "modules": [
        "Specimen Sample Collection",
        "Requisite Test and Results Entry",
        "Track Samples and Status",
        "Urgent Test Alert System"
      ]
    },
    {
      "heading": "Operation Theatre Management",
      "description": "Allows registering all operation theatres, managing operation types, equipment details, and patient surgery records.",
      "modules": [
        "Register Operation Theatres",
        "Booking Theatres in Advance",
        "Manage Operation Types",
        "Anesthesia Type",
        "Equipment Details in OT",
        "Usage Charge",
        "Search Patients for Operation Details"
      ]
    },
    {
      "heading": "Blood Bank",
      "description": "A comprehensive solution for maintaining information regarding blood donation and issuing blood during surgeries.",
      "modules": [
        "Registering Blood Donors",
        "Receiving Blood or Donation",
        "Setting up Blood Bag Number and Expiry Date",
        "Instant Search of Required Blood Group and Issue to Patient"
      ]
    },
    {
      "heading": "Emergency / Casualty Management",
      "description": "Quick and minimal detail patient registration form for emergency cases, with provisions for patient condition on arrival and ward transfers.",
      "modules": [
        "Quick Patient Registration",
        "Store Details About Condition of Patient During Arrival",
        "Move Patient from Emergency Area to Wards"
      ]
    },
    {
        "heading": "Inventory Management & Purchase",
        "description": "Deals with the purchase of items required in the hospital, issuance of those items into various departments, maintenance of stock, and setting up the minimum stock/reorder level for each item.",
        "modules": [
          "Raise Purchase Request",
          "Purchase Request Approval",
          "Purchase Order Generation",
          "Allocation of Purchased Items",
          "Stock Transfer Between Departments",
          "Reorder Level Setting",
          "Stock Management",
          "Stock Requisition",
          "Stock Expiry Management",
          "Vendor Management and Payments"
        ]
      },
      {
        "heading": "Laundry Management",
        "description": "Manages the cleaning, sanitation, infection control, and housekeeping employee administration to maintain a clean and healthy environment.",
        "modules": [
          "Laundry Item Purchase Requisition",
          "Issue Linen for Wash",
          "Return Linen After Wash",
          "Defective Linen Disposal",
          "Daily Consumption Detail Entry"
        ]
      },
      {
        "heading": "Insurance Management",
        "description": "This module enables patients to pay their bills through health packages from insurance companies, managing various company policies and claims."
      },
      {
        "heading": "Appointment Scheduling",
        "description": "This module allows reception to fix appointments for patients with doctors based on availability and specialization required."
      },
      {
        "heading": "Doctor Module",
        "description": "This module is for hospital doctors/consultants to diagnose patients, assign tests, treatment procedures, and generate prescriptions."
      },
      {
        "heading": "Electronic Medical Record (EMR)",
        "description": "A patient-centric platform for doctors, providing access to patient health records and supporting evidence-based decision making."
      },
      {
        "heading": "Nursing Module",
        "description": "A module for nurses to manage their tasks with the objective of better patient care, integrated with clinical modules for information flow."
      },
      {
        "heading": "Staff and HR & Payroll Management",
        "description": "This module manages staff registration, payroll, allowances, deductions, and other HR-related activities."
      },
      {
        "heading": "Ambulance Management",
        "description": "Concerned with the complete management of ambulances, tracking their movement and maintenance.",
        "modules": [
          "Add Ambulance Category",
          "Ambulance Expense Addition",
          "Driver Allocation",
          "Ambulance Requisition Update",
          "Ambulance Status Management"
        ]
      },
      {
        "heading": "Canteen Management",
        "description": "Designed to manage the hospital's food and beverage services, tracking stock and food supply to patients.",
        "modules": [
          "Canteen Item Purchase Requisition",
          "Menu Wise Diet Entry",
          "Menu Scheduling",
          "Pop-up of Current Day Menus",
          "Diet Requisition from Wards",
          "Issuance of Dietician Recommended Diet",
          "Patient Diet Feedback Entry"
        ]
      },
      {
        "heading": "Dietary Management",
        "description": "Assists the canteen/kitchen in providing nutritious meals to patients as prescribed by dieticians.",
        "modules": [
          "Diet Chart Creation by Dietician",
          "Calorie Count and Diet Type Suggestion",
          "Complete Meal Planning",
          "Entry of Various Diet Types"
        ]
      },
      {
        "heading": "Financial Accounting",
        "description": "Handles various accounting processes in the hospital, covering incomes, expenses, purchases, ledgers, and other books of accounts.",
        "modules": [
          "Voucher Entry",
          "Financial Reporting",
          "Financial Statements",
          "Accounting Books Creation",
          "Track Account Receivable",
          "Vendor/Supplier Invoice Clearance"
        ]
      },
      {
        "heading": "MIS Reports",
        "description": "Provides reports for analysis and monitoring by the hospital's top management.",
        "modules": [
          "Patient Registration Report",
          "OPD Collection Report",
          "IPD Collection Report",
          "Inpatient Admission Report",
          "Inpatient Discharge Report",
          "Inpatient Bed Transfer Report",
          "Inpatient Bill Report",
          "Inpatient Pending Bill Report",
          "Revenue Reports",
          "Consulting Doctor Wise Patient List",
          "Investigations Report",
          "Daily Test List",
          "Emergency Cases Treated List",
          "Billing Report by Department",
          "Stock Purchase Requisitions",
          "Service Wise Billing Rates",
          "Custom Reports Addition"
        ]
      },
      {
        "heading": "Admin Security",
        "description": "Controls access to various modules and sub-modules, managing secure parameters."
      },
      {
        "heading": "Internal Communication System",
        "description": "Facilitates electronic communication among staff for official reasons, reducing paperwork."
      }
      
   
  ]
  