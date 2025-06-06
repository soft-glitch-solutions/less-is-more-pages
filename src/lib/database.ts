
import Database from 'better-sqlite3';

// Initialize SQLite database
const db = new Database('crm.db');

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    address TEXT,
    notes TEXT,
    status TEXT DEFAULT 'Active',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    service TEXT NOT NULL,
    message TEXT,
    notes TEXT,
    status TEXT DEFAULT 'New',
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS quotes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quote_number TEXT NOT NULL UNIQUE,
    customer_name TEXT NOT NULL,
    service TEXT NOT NULL,
    amount REAL NOT NULL,
    line_items TEXT, -- JSON string
    notes TEXT,
    status TEXT DEFAULT 'Draft',
    valid_until TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Customer operations
export const customerDB = {
  getAll: () => db.prepare('SELECT * FROM customers ORDER BY created_at DESC').all(),
  create: (customer: any) => db.prepare(`
    INSERT INTO customers (name, email, phone, company, address, notes)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(customer.name, customer.email, customer.phone, customer.company, customer.address, customer.notes),
  delete: (id: number) => db.prepare('DELETE FROM customers WHERE id = ?').run(id)
};

// Lead operations
export const leadDB = {
  getAll: () => db.prepare('SELECT * FROM leads ORDER BY submitted_at DESC').all(),
  create: (lead: any) => db.prepare(`
    INSERT INTO leads (name, email, phone, service, message, notes)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(lead.name, lead.email, lead.phone, lead.service, lead.message, lead.notes || ''),
  updateStatus: (id: number, status: string) => db.prepare('UPDATE leads SET status = ? WHERE id = ?').run(status, id),
  updateNotes: (id: number, notes: string) => db.prepare('UPDATE leads SET notes = ? WHERE id = ?').run(notes, id),
  delete: (id: number) => db.prepare('DELETE FROM leads WHERE id = ?').run(id)
};

// Quote operations
export const quoteDB = {
  getAll: () => db.prepare('SELECT * FROM quotes ORDER BY created_at DESC').all(),
  create: (quote: any) => {
    const quoteNumber = `Q-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;
    return db.prepare(`
      INSERT INTO quotes (quote_number, customer_name, service, amount, line_items, notes, valid_until)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(quoteNumber, quote.customerName, quote.service, quote.amount, JSON.stringify(quote.lineItems), quote.notes, quote.validUntil);
  },
  updateStatus: (id: number, status: string) => db.prepare('UPDATE quotes SET status = ? WHERE id = ?').run(status, id),
  delete: (id: number) => db.prepare('DELETE FROM quotes WHERE id = ?').run(id)
};

export default db;
