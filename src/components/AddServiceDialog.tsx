import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const categories = ["Cleaning", "Washing", "Plumbing", "Tank Washing", "Water Supply", "House Shifting", "Painting", "Other"];

export interface ServiceListing {
  id: number;
  name: string;
  description: string;
  category: string;
  price: string;
  duration: string;
  imageUrl: string;
  available: boolean;
}

interface AddServiceDialogProps {
  onAdd: (service: ServiceListing) => void;
}

const AddServiceDialog = ({ onAdd }: AddServiceDialogProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !category || !price.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }
    onAdd({
      id: Date.now(),
      name: name.trim().slice(0, 100),
      description: description.trim().slice(0, 500),
      category,
      price: `$${price}`,
      duration: duration.trim().slice(0, 50),
      imageUrl: imageUrl.trim() || "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400",
      available: true,
    });
    toast.success("Service listed successfully!");
    setOpen(false);
    setName(""); setDescription(""); setCategory(""); setPrice(""); setDuration(""); setImageUrl("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="accent-gradient text-accent-foreground border-0 gap-2">
          <Plus className="w-4 h-4" /> Add Service
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading">Add New Service</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="name">Service Name *</Label>
            <Input id="name" placeholder="e.g. Deep Home Cleaning" value={name} onChange={(e) => setName(e.target.value)} maxLength={100} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="desc">Description</Label>
            <Textarea id="desc" placeholder="Describe your service..." value={description} onChange={(e) => setDescription(e.target.value)} maxLength={500} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Category *</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price ($) *</Label>
              <Input id="price" type="number" min="1" placeholder="50" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Input id="duration" placeholder="e.g. 2-3 hrs" value={duration} onChange={(e) => setDuration(e.target.value)} maxLength={50} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input id="image" placeholder="https://..." value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            </div>
          </div>
          <Button type="submit" className="w-full accent-gradient text-accent-foreground border-0">List Service</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddServiceDialog;
