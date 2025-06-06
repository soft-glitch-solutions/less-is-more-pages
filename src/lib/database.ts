
// Browser-compatible database using localStorage
interface Customer {
  id: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  address?: string;
  notes?: string;
  status: string;
  created_at: string;
}

interface Lead {
  id: number;
  name: string;
  email: string;
  phone?: string;
  service: string;
  message?: string;
  notes?: string;
  status: string;
  submitted_at: string;
}

interface Quote {
  id: number;
  quote_number: string;
  customer_name: string;
  service: string;
  amount: number;
  line_items: any[];
  notes?: string;
  status: string;
  valid_until: string;
  created_at: string;
}

// Helper functions for localStorage operations
const getStorageData = <T>(key: string): T[] => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error);
    return [];
  }
};

const setStorageData = <T>(key: string, data: T[]): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error writing ${key} to localStorage:`, error);
  }
};

const generateId = (items: any[]): number => {
  return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
};

// Customer operations
export const customerDB = {
  getAll: (): Customer[] => {
    return getStorageData<Customer>('customers').sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  },
  
  create: (customer: Omit<Customer, 'id' | 'status' | 'created_at'>): void => {
    const customers = getStorageData<Customer>('customers');
    const newCustomer: Customer = {
      ...customer,
      id: generateId(customers),
      status: 'Active',
      created_at: new Date().toISOString()
    };
    customers.push(newCustomer);
    setStorageData('customers', customers);
  },
  
  delete: (id: number): void => {
    const customers = getStorageData<Customer>('customers');
    const filtered = customers.filter(customer => customer.id !== id);
    setStorageData('customers', filtered);
  }
};

// Lead operations
export const leadDB = {
  getAll: (): Lead[] => {
    return getStorageData<Lead>('leads').sort((a, b) => 
      new Date(b.submitted_at).getTime() - new Date(a.submitted_at).getTime()
    );
  },
  
  create: (lead: Omit<Lead, 'id' | 'status' | 'submitted_at'>): void => {
    const leads = getStorageData<Lead>('leads');
    const newLead: Lead = {
      ...lead,
      id: generateId(leads),
      status: 'New',
      submitted_at: new Date().toISOString()
    };
    leads.push(newLead);
    setStorageData('leads', leads);
  },
  
  updateStatus: (id: number, status: string): void => {
    const leads = getStorageData<Lead>('leads');
    const updated = leads.map(lead => 
      lead.id === id ? { ...lead, status } : lead
    );
    setStorageData('leads', updated);
  },
  
  updateNotes: (id: number, notes: string): void => {
    const leads = getStorageData<Lead>('leads');
    const updated = leads.map(lead => 
      lead.id === id ? { ...lead, notes } : lead
    );
    setStorageData('leads', updated);
  },
  
  delete: (id: number): void => {
    const leads = getStorageData<Lead>('leads');
    const filtered = leads.filter(lead => lead.id !== id);
    setStorageData('leads', filtered);
  }
};

// Quote operations
export const quoteDB = {
  getAll: (): Quote[] => {
    return getStorageData<Quote>('quotes').sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  },
  
  create: (quote: Omit<Quote, 'id' | 'quote_number' | 'status' | 'created_at'>): { lastInsertRowid: number } => {
    const quotes = getStorageData<Quote>('quotes');
    const quoteNumber = `Q-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;
    const newQuote: Quote = {
      ...quote,
      id: generateId(quotes),
      quote_number: quoteNumber,
      status: 'Draft',
      created_at: new Date().toISOString()
    };
    quotes.push(newQuote);
    setStorageData('quotes', quotes);
    return { lastInsertRowid: newQuote.id };
  },
  
  updateStatus: (id: number, status: string): void => {
    const quotes = getStorageData<Quote>('quotes');
    const updated = quotes.map(quote => 
      quote.id === id ? { ...quote, status } : quote
    );
    setStorageData('quotes', updated);
  },
  
  delete: (id: number): void => {
    const quotes = getStorageData<Quote>('quotes');
    const filtered = quotes.filter(quote => quote.id !== id);
    setStorageData('quotes', filtered);
  }
};

// Initialize with sample data if storage is empty
const initializeSampleData = () => {
  if (getStorageData('customers').length === 0) {
    // Add some sample data for demonstration
    console.log('Initializing sample data...');
  }
};

// Initialize on module load
initializeSampleData();
