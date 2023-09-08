import { PostgrestError } from "@supabase/supabase-js";
import supabase from "./supabase";
import { Cabin } from "../components/cabins/@types";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
};

export const deleteCabin = async (
  id: number
): Promise<PostgrestError | null> => {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  return null;
};

export const createCabin = async (cabin: Cabin) => {
  const { data, error } = await supabase
    .from("cabins")
    .insert([cabin])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  return data;
};
