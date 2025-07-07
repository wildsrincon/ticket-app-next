import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";
import Link from "next/link";


const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <h2 className="text-3xl font-bold">{ticket.title}</h2>
          <Link href={ticketPath(ticket.id)} className="text-sm underline">View Ticket</Link>
        </div>
      ))}
    </div>
  );
};

export default TicketsPage;