import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache";

const createPost = async () => {
  const supabase = await createClient();

  const {data: {user}} = await supabase.auth.getUser();

  
}

export default createPost