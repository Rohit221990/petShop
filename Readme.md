# TypeScript Pet Shop

## Project Overview

This project simulates a simple pet management system implemented in TypeScript. It features modular `Cat` and `Dog` classes with realistic behaviors like speaking/barking, name management, and age tracking. The project includes a `Data` service that simulates transactional persistence of pets, with batch insert support.

Purpose:
- Demonstrate object-oriented programming in TypeScript
- Show transactional database operations (simulated)
- Practice ES module usage and modern Node.js development
- Include unit and integration tests using Jest and ts-jest

## Features

- Cat and Dog classes with private fields, name history, and behaviors
- Random initial ages for pets (5-10 years)
- Name management with complete name history tracking
- Speak and bark methods with customizable sounds
- Automatic age increment after every 5 speaks/barks
- Simulated data persistence with transaction control (`beginTran`, `commit`, `rollback`)
- Batch insert support for multiple pets
- Statistics logging for saved pets

## File Structures:

  ├── src/
│   ├── Cat.ts                # Cat class
│   ├── Dog.ts                # Dog class
│   ├── Data.ts               # Data persistence simulation
│   ├── Utils.ts              # Utility functions (e.g. logging)
│   ├── petShop.ts            # Business logic for pet saving and stats
├── tests/
│   ├── Cat.test.ts           # Unit tests for Cat
│   ├── Dog.test.ts           # Unit tests for Dog
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript project configuration
├── jest.config.js            # Jest test runner configuration
└── README.md                 # Project documentation

## Prerequisites

- Node.js >= 14.x
- npm (Node Package Manager)
- TypeScript (installed locally via devDependencies)

## Setup & Installation

1. Install dependencies

    `npm install`

2. Build the project (compile TypeScript files to JavaScript)

    `npm run build`

3. Run the compiled JavaScript program:

    `npm start`

4. Run the PetShop execution
    `npm run runPetShop`

## Running Tests

Run the test suite using Jest:
    `npm run test`


To automatically rebuild on source changes during development:
    `npm run watch`

Tests cover all classes and modules with unit and integration tests.

## Technologies Used

- TypeScript for static typing and modern JavaScript features
- Node.js for runtime environment
- Jest and ts-jest for testing framework and TypeScript test transpilation

---

## License

This project is licensed under the MIT License.

---

Feel free to contribute or open issues for improvements!

------------------------------------------------------------------------------------------------------------------


When writing unit tests for your project, especially with dependencies like the `Data` class and main business logic in the `petShop` module, careful design decisions come into play to ensure tests are meaningful, maintainable, and reliable. Here’s an explanation of the choices made and why:
Mocking External Dependencies
	•	Why mock `Data` class methods?The `Data` class simulates database operations such as transactions and      inserts. Mocking these methods ensures tests don’t require a real database or I/O, making them fast, reliable, and isolated. It allows tests to focus on business logic correctness without side effects.
	•	How is mocking done?We mock the entire `Data` class module with Jest’s `jest.mock()` to replace implementations of `beginTran`, `commit`, `rollback`, and `insert` with jest mock functions. This lets us track calls and force errors to test error handling.

Isolating Tests and Resetting State
	•	Why reset global `savedPets` before each test `savedPets` is a shared mutable array storing saved pet instances, so clearing it prevents cross-test contamination, making tests independent and reproducible.
	•	Clearing mocks ensures fresh call histories after each test, allowing accurate assertions on function calls.

Testing Both Success and Failure Paths
	•	Tests assert the `saveTest` and `savePetShop` functions successfully insert pets and commit.
	•	Separate tests simulate insertion failures by mocking `insert` to throw errors, verifying the correct rollback behavior and error logging.

This approach provides full coverage of normal workflow and exceptional cases, increasing confidence in robustness.

Spying on Console Outputs
	•	By mocking `console.log`, tests verify important information is output correctly, essential for logging functions like `logStats`.
	•	This ensures UI/UX-related aspects or operational reports remain consistent.

Using Real Instances vs Full Mocks
	•	We use real `Cat` and `Dog` instances in tests, focusing on higher-level integration and behavior rather than mocking them entirely.
	•	This strikes a balance by verifying integration but still isolating persistence layers and logging.

Why This Approach Matters
	•	Modular and isolated tests: Encourages maintainability and pinpointing issues easily.
	•	Fast feedback cycle: No dependencies on real DB or async delays speed up CI pipelines.
	•	Robustness to changes: By testing error/failure handling explicitly along with successes.
	•	Clear intent: Mocks show which parts are side effects to minimize test fragility.

    ------------------------------------------------------------------------------------------------

If I were to revisit or extend the project, here are some aspects I might do differently or enhance to help future developers maintain and evolve the code more easily:

1. Use Dependency Injection for Data
    Instead of directly instantiating `Data` inside the `petShop` module, inject it as a dependency. This improves:
	•	Testability by allowing mock or alternative implementations to be passed in easily.
	•	Flexibility to swap real DB connection when scaling or integrating with real persistence.

2. Enhance Logging with a Structured Logger
Using a basic `console.log` function is simple but:
	•	Introducing a structured logging library with log levels would make it more production-ready.
	•	Enables better diagnostics and integration with modern observability systems.

3. Instead of embedding persistence logic inside `Data` directly, separate repository concepts would:
	•	Isolate domain logic from persistence details.
	•	Make migration to different data stores easier.
	•	Clarify separation of concerns for new contributors.

4. Direct Instantiation of `Data` in `petShop`
    Why reconsider:
        Creating a singleton `Data` instance directly inside `petShop.ts` tightly couples persistence logic to that module, reducing test isolation and future flexibility.
    Alternative:
        Use dependency injection to pass a `Data` instance into functions or classes, allowing easier mocking, parallel test runs, and replacement with real DB interfaces later.

2. Keeping Name History Inside Entity Classes
    Why reconsider:
        toring name history within `Cat`/`Dog` classes simplifies design but can bloat domain objects and mix state concerns.
    Alternative:
        Separate historical data management into repositories or event sourcing patterns, which better manage lifecycle and data growth, especially if history size escalates.