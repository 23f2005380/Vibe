import { Sandbox }from "@e2b/code-interpreter";

export async function createSandbox(sandboxName: string) {
  const sandbox = await Sandbox.create(sandboxName);
  return sandbox.sandboxId;
}