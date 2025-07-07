import { initialTickets } from '@/data';

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return <div className="text-red-500">Ticket not found</div>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold">{ticket.title}</h2>
      <p className="text-lg">{ticket.description}</p>
    </div>
  );
};

export default TicketPage;