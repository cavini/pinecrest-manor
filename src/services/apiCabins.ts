import { PostgrestError } from "@supabase/supabase-js";
import supabase, { cabinImagePrefix, supabaseUrl } from "./supabase";
import { Cabin } from "../components/cabins/@types";
import { v4 as uuidv4 } from "uuid";

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
  const imageName = `${uuidv4()}-${cabin.image.name}`.replaceAll(`/`, "");
  const imagePath = `${supabaseUrl}/${cabinImagePrefix}/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...cabin, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
};
