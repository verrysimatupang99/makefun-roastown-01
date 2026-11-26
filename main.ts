// grass — a tiny CLI that prints one line.
// Flags: --shout (uppercase output), --help (usage to stderr, exit 0).

const LINE = "I asked my agent to touch grass. It filed a pull request renaming the lawn.";

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function usage(): void {
  console.error("Usage: node main.ts [--shout] [--help]");
}

function parseArgs(argv: string[]): { shout: boolean; help: boolean } {
  let shout = false;
  let help = false;
  for (const arg of argv) {
    if (arg === "--shout" || arg === "-s") shout = true;
    else if (arg === "--help" || arg === "-h") help = true;
    else {
      console.error(`Unknown flag: ${arg}`);
      usage();
      process.exit(2);
    }
  }
  return { shout, help };
}

function main(): void {
  const flags = parseArgs(process.argv.slice(2));
  if (flags.help) {
    usage();
    process.exit(0);
  }
  console.log(renderLine(flags.shout));
}

main();
