import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useWriteContract } from "wagmi"; // 🟢
import { PlusCircledIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import { etherGigsAbi, etherGigsAddress } from "@/lib/contract/EtherGigs";

const SendProposalForm = ({ jobId }: { jobId: string }) => {
  const [formData, setFormData] = useState({
    description: "",
    bid: "",
  });

  const { isSuccess, isPending, writeContract } = useWriteContract({});

  const constructProposalData = (description: string, bid: string) => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    const proposalData = {
      jobId: jobId,
      createdAt: `${currentDate} ${currentTime}`,
      bid: bid,
      description: description,
    };
    return proposalData;
  };

  async function createProposal() {
    try {
      const newProposalData = constructProposalData(
        formData.description,
        formData.bid
      );
      console.log(" Data: ", newProposalData);

      writeContract({
        abi: etherGigsAbi,
        address: etherGigsAddress,
        functionName: "createProposal",
        args: [
          newProposalData.jobId,
          newProposalData.createdAt,
          Number(newProposalData.bid) * 10 ** 18,
          newProposalData.description,
        ],
      });
    } catch (error) {
      console.error("Error submitting record:", error);
    }
  }

  const handleSubmitRequest = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Creating request...");
    console.log("Form Data: ", formData);
    await createProposal();
  };

  return (
    <div className="flex justify-between items-center ">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-green-950 hover:bg-green-800">
            <PlusCircledIcon className="mt-0.5" />
            <span className="w-2"> </span>Apply
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          {isPending ? (
            <div className="flex flex-col items-center justify-center h-40 gap-4">
              <p>Creating Proposal ...</p>
            </div>
          ) : (
            <>
              {!isSuccess ? (
                <>
                  <DialogHeader>
                    <DialogTitle>Send a Proposal.</DialogTitle>
                    <DialogDescription>
                      Enter details to send a proposal.
                    </DialogDescription>
                  </DialogHeader>

                  <form onSubmit={handleSubmitRequest}>
                    <div className="grid gap-4 py-4 ">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                          Description
                        </Label>
                        <Input
                          id="description"
                          placeholder="Write a description"
                          className="col-span-3"
                          value={formData.description}
                          onChange={(e: { target: { value: any } }) =>
                            setFormData({
                              ...formData,
                              description: e.target.value,
                            })
                          }
                          required
                        />
                      </div>

                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="budget" className="text-right">
                          Bid
                        </Label>
                        <Input
                          id="Tags"
                          type="number"
                          placeholder="enter your bid"
                          className="col-span-3"
                          value={formData.bid}
                          onChange={(e: { target: { value: any } }) =>
                            setFormData({
                              ...formData,
                              bid: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Send</Button>
                    </DialogFooter>
                  </form>
                </>
              ) : (
                <div className="flex flex-col gap-4 items-center">
                  <CheckCircledIcon className="w-20 h-20 text-green-500" />
                  <p>Proposal sent Successfully</p>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SendProposalForm;
