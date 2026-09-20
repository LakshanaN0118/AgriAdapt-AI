# AgriAdapt AI

## AI-Powered Climate-Resilient Crop Decision Support for Zero Hunger

AgriAdapt AI is an AI-assisted web-based decision-support prototype developed as part of the 1M1B AI for Sustainability Virtual Internship.

The project is aligned with **UN Sustainable Development Goal 2 (SDG 2): Zero Hunger**.

## Problem Statement

Agriculture is increasingly affected by climate-related challenges such as drought, extreme heat, irregular rainfall and flooding, while communities also face nutritional challenges including micronutrient deficiencies.

Farmers may need to consider multiple factors such as climate risk, water availability, soil conditions and nutritional requirements when exploring crop options. AgriAdapt AI explores how AI-assisted decision support can connect these factors in a single workflow.

## Proposed Solution

AgriAdapt AI allows users to provide:

- Location
- Soil type
- Water availability
- Climate risk
- Nutritional priority
- Current crop

The prototype analyzes these inputs and provides:

- Crop recommendation
- Climate-risk analysis
- Nutritional considerations
- Retrieved knowledge
- Explainable decision analysis
- Alternative crop options
- Sustainability guidance
- Field sustainability assessment

## AI Elements Used

The prototype demonstrates:

- Retrieval-Augmented Generation (RAG)
- Prompt engineering
- Local knowledge retrieval
- Explainable AI
- Rule-based decision logic
- AI-assisted solution development using IBM Bob

The current prototype uses a curated local knowledge base and transparent rule-based logic. It is **not a trained machine-learning model and is not connected to a live external AI API**.

## RAG Workflow

The prototype demonstrates a simplified Retrieval-Augmented Generation workflow:

```text
User Inputs
     ↓
Retrieval Query
     ↓
Local Knowledge Base
     ↓
Relevant Knowledge Retrieved
     ↓
Rule-Based Decision Analysis
     ↓
Recommendation + Explanation
