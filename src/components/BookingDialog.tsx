import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceName: string;
  servicePrice: string;
  providerName: string;
}

const BookingDialog = ({ open, onOpenChange, serviceName, servicePrice, providerName }: BookingDialogProps) => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !address.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }
    setConfirmed(true);
    toast.success("Booking confirmed!");
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setConfirmed(false);
      setDate(undefined);
      setTime("");
      setAddress("");
      setPhone("");
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {confirmed ? (
          <div className="text-center py-6 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-accent mx-auto" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Booking Confirmed!</h2>
            <div className="text-muted-foreground space-y-1">
              <p className="font-medium text-foreground">{serviceName}</p>
              <p>by {providerName}</p>
              <p>{format(date!, "PPP")} at {time}</p>
              <p>{address}</p>
              <p className="text-lg font-bold text-accent mt-2">{servicePrice}</p>
            </div>
            <Button onClick={handleClose} className="accent-gradient text-accent-foreground border-0 mt-4">Done</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-heading">Book {serviceName}</DialogTitle>
              <p className="text-sm text-muted-foreground">by {providerName} · {servicePrice}</p>
            </DialogHeader>
            <form onSubmit={handleBook} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label>Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date()}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>Time Slot *</Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address *</Label>
                <Input id="address" placeholder="Enter your full address" value={address} onChange={(e) => setAddress(e.target.value)} maxLength={200} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="Your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={20} />
              </div>
              <Button type="submit" className="w-full accent-gradient text-accent-foreground border-0">Confirm Booking</Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
