// Linked List for storing Organization data
// This can be used to manage organizations registered through RegisterOrganization

// Organization data type (matches RegisterOrganization form data)
export interface OrganizationData {
  id?: number;
  organizationName: string;
  contactFirstName: string;
  contactLastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  // Additional fields for display
  name?: string;
  location?: string;
  mission?: string;
  completion?: number;
  itemsNeeded?: number;
  category?: string;
}

// Node class for linked list
class OrganizationNode {
  data: OrganizationData;
  next: OrganizationNode | null;

  constructor(data: OrganizationData) {
    this.data = data;
    this.next = null;
  }
}

// Linked List class for organizations
export class OrganizationLinkedList {
  head: OrganizationNode | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add organization at the end
  append(organization: OrganizationData): void {
    const newNode = new OrganizationNode(organization);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Add organization at the beginning
  prepend(organization: OrganizationData): void {
    const newNode = new OrganizationNode(organization);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Find organization by email
  findByEmail(email: string): OrganizationData | null {
    let current = this.head;
    while (current) {
      if (current.data.email === email) {
        return current.data;
      }
      current = current.next;
    }
    return null;
  }

  // Find organization by name
  findByName(name: string): OrganizationData | null {
    let current = this.head;
    while (current) {
      if (current.data.organizationName === name) {
        return current.data;
      }
      current = current.next;
    }
    return null;
  }

  // Delete organization by email
  deleteByEmail(email: string): boolean {
    if (!this.head) return false;

    if (this.head.data.email === email) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data.email === email) {
        current.next = current.next.next;
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Convert to array (useful for React rendering)
  toArray(): OrganizationData[] {
    const result: OrganizationData[] = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  // Get all organizations as array format for BrowseNonprofits component
  toNonprofitArray() {
    return this.toArray().map((org, index) => ({
      id: org.id || index + 1,
      name: org.organizationName,
      location: `${org.city}, ${org.state}`,
      mission: org.mission || `${org.organizationName} - Making a difference in ${org.city}`,
      completion: org.completion || 0,
      itemsNeeded: org.itemsNeeded || 0,
      category: org.category || "General",
    }));
  }

  // Get size
  getSize(): number {
    return this.size;
  }

  // Check if empty
  isEmpty(): boolean {
    return this.size === 0;
  }
}

// Example usage:
/*
// Create a linked list instance
const organizationList = new OrganizationLinkedList();

// Add organizations (from RegisterOrganization form submission)
organizationList.append({
  organizationName: "Hope Education Center",
  contactFirstName: "John",
  contactLastName: "Doe",
  email: "hope@example.com",
  phone: "555-1234",
  address: "123 Main St",
  city: "San Francisco",
  state: "CA",
  zipCode: "94102",
  mission: "Providing educational resources",
  completion: 65,
  itemsNeeded: 12,
  category: "Education"
});

// Convert to array for rendering in BrowseNonprofits
const nonprofitsArray = organizationList.toNonprofitArray();
*/

