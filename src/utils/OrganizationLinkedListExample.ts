// Example: How to use OrganizationLinkedList with RegisterOrganization

import { OrganizationLinkedList, OrganizationData } from "./OrganizationLinkedList";

// Step 1: Create a linked list instance (typically in a service/context)
export const organizationList = new OrganizationLinkedList();

// Step 2: When RegisterOrganization form is submitted, add to linked list
// This would be called from RegisterOrganization component's onSubmit handler

export function addOrganizationFromRegistration(formData: {
  organizationName: string;
  contactFirstName: string;
  contactLastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}): void {
  const organizationData: OrganizationData = {
    ...formData,
    // Set default values for display
    mission: `${formData.organizationName} - Making a difference in ${formData.city}`,
    completion: 0,
    itemsNeeded: 0,
    category: "General",
  };

  // Add to linked list
  organizationList.append(organizationData);
}

// Step 3: Convert linked list to array for rendering in BrowseNonprofits
export function getOrganizationsForDisplay() {
  return organizationList.toNonprofitArray();
}

// Step 4: Example usage in RegisterOrganization component:
/*
import { addOrganizationFromRegistration } from "@/utils/OrganizationLinkedListExample";

const onSubmit = async (data: OrganizationFormData) => {
  // ... existing Supabase registration code ...
  
  if (authData.user) {
    // Add to linked list after successful registration
    addOrganizationFromRegistration({
      organizationName: data.organizationName,
      contactFirstName: data.contactFirstName,
      contactLastName: data.contactLastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode,
    });
    
    // ... rest of the code ...
  }
};
*/

// Step 5: Example usage in BrowseNonprofits component:
/*
import { getOrganizationsForDisplay } from "@/utils/OrganizationLinkedListExample";

export const BrowseNonprofits = () => {
  // Get organizations from linked list
  const linkedListOrganizations = getOrganizationsForDisplay();
  
  // Combine with static data or use only linked list data
  const allNonprofits = [
    ...linkedListOrganizations,
    // ... other static nonprofits
  ];
  
  // ... render code ...
};
*/

