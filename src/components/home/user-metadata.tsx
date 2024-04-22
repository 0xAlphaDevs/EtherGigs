import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useWriteContract } from "wagmi"; // 🟢
import { useAccount } from "wagmi";
import { etherGigsAbi, etherGigsAddress } from "@/lib/contract/EtherGigs";

interface FormData {
  name: string;
  userType: string;
  location: string;
}

export function UserMetadata({ setRecheckUser }: { setRecheckUser: any }) {
  const { address } = useAccount();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    userType: "",
    location: "",
  });
  // 🟢
  const { isSuccess, isPending, writeContract } = useWriteContract({});

  function handleClick() {
    // reset all state values
    setFormData({
      name: "",
      userType: "",
      location: "",
    });
  }

  const constructUser = (name: string, userType: string, location: string) => {
    const newUser = {
      name: name,
      location: location,
      userType: userType,
    };
    return newUser;
  };

  async function createUser() {
    try {
      const newUser = constructUser(
        formData.name,
        formData.userType,
        formData.location
      );
      console.log(" Data: ", formData);
      // TO DO: call register function from smart contract 🟢
      writeContract({
        abi: etherGigsAbi,
        address: etherGigsAddress,
        functionName: "createUser",
        args: [newUser.name, newUser.location, newUser.userType],
      });
      setTimeout(() => {
        setRecheckUser((prev: boolean) => !prev);
      }, 2000);
    } catch (error) {
      console.error("Error submitting metaData:", error);
    }
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitRequest = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Registering...");
    console.log("Form Data: ", formData);
    await createUser();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={handleClick}>
          Register
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {isPending ? (
          <div className="flex flex-col items-center justify-center h-40 gap-4">
            <p>Registering user...</p>
          </div>
        ) : (
          <>
            {!isSuccess ? (
              <>
                <DialogHeader>
                  <DialogTitle>Enter Details</DialogTitle>
                  <DialogDescription>
                    Register your details here to access EtherGigs.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmitRequest}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        className="col-span-3"
                        onChange={handleChange}
                        name="name"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="userType" className="text-right">
                        UserType
                      </Label>
                      <Select
                        onValueChange={(value: string) =>
                          setFormData({
                            ...formData,
                            userType: value,
                          })
                        }
                        required
                        name="userType"
                      >
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select a user type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="client">Client</SelectItem>
                            <SelectItem value="freelancer">
                              Freelancer
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="location" className="text-right">
                        Location
                      </Label>
                      <Input
                        id="location"
                        value={formData.location}
                        className="col-span-3"
                        onChange={handleChange}
                        name="location"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Submit</Button>
                  </DialogFooter>
                </form>
              </>
            ) : (
              <div className="flex flex-col gap-4 items-center">
                <CheckCircledIcon className="w-20 h-20 text-green-500" />
                <p>Registered Successfully</p>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
