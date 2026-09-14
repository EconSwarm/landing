export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      analysis_artifacts: {
        Row: {
          created_at: string
          id: string
          kind: string
          metadata_json: Json
          run_id: string
          storage_key: string
        }
        Insert: {
          created_at?: string
          id?: string
          kind: string
          metadata_json?: Json
          run_id: string
          storage_key: string
        }
        Update: {
          created_at?: string
          id?: string
          kind?: string
          metadata_json?: Json
          run_id?: string
          storage_key?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_artifacts_run_id_fkey"
            columns: ["run_id"]
            isOneToOne: false
            referencedRelation: "analysis_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_claim_evidence: {
        Row: {
          claim_id: string
          created_at: string
          owner_id: string
          run_evidence_id: string
          run_id: string
        }
        Insert: {
          claim_id: string
          created_at?: string
          owner_id: string
          run_evidence_id: string
          run_id: string
        }
        Update: {
          claim_id?: string
          created_at?: string
          owner_id?: string
          run_evidence_id?: string
          run_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_claim_evidence_claim_id_run_id_owner_id_fkey"
            columns: ["claim_id", "run_id", "owner_id"]
            isOneToOne: false
            referencedRelation: "analysis_claims"
            referencedColumns: ["id", "run_id", "owner_id"]
          },
          {
            foreignKeyName: "analysis_claim_evidence_run_evidence_id_run_id_owner_id_fkey"
            columns: ["run_evidence_id", "run_id", "owner_id"]
            isOneToOne: false
            referencedRelation: "analysis_run_evidence"
            referencedColumns: ["id", "run_id", "owner_id"]
          },
        ]
      }
      analysis_claims: {
        Row: {
          alternatives_json: Json
          as_of_date: string
          causal_path_json: Json
          claim_type: string
          confidence: string
          created_at: string
          id: string
          invalidation_conditions_json: Json
          owner_id: string
          run_id: string
          statement: string
        }
        Insert: {
          alternatives_json?: Json
          as_of_date: string
          causal_path_json?: Json
          claim_type: string
          confidence: string
          created_at?: string
          id?: string
          invalidation_conditions_json?: Json
          owner_id: string
          run_id: string
          statement: string
        }
        Update: {
          alternatives_json?: Json
          as_of_date?: string
          causal_path_json?: Json
          claim_type?: string
          confidence?: string
          created_at?: string
          id?: string
          invalidation_conditions_json?: Json
          owner_id?: string
          run_id?: string
          statement?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_claims_run_id_owner_id_fkey"
            columns: ["run_id", "owner_id"]
            isOneToOne: false
            referencedRelation: "analysis_runs"
            referencedColumns: ["id", "owner_id"]
          },
        ]
      }
      analysis_events: {
        Row: {
          created_at: string
          id: string
          payload_json: Json
          run_id: string
          sequence: number
          stage: string
          status: string
        }
        Insert: {
          created_at?: string
          id?: string
          payload_json?: Json
          run_id: string
          sequence: number
          stage: string
          status: string
        }
        Update: {
          created_at?: string
          id?: string
          payload_json?: Json
          run_id?: string
          sequence?: number
          stage?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_events_run_id_fkey"
            columns: ["run_id"]
            isOneToOne: false
            referencedRelation: "analysis_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_metric_snapshots: {
        Row: {
          as_of_date: string | null
          id: string
          metadata_json: Json
          metric_group: string
          metric_key: string
          metric_value_numeric: number | null
          metric_value_text: string | null
          run_id: string
          unit: string | null
        }
        Insert: {
          as_of_date?: string | null
          id?: string
          metadata_json?: Json
          metric_group: string
          metric_key: string
          metric_value_numeric?: number | null
          metric_value_text?: string | null
          run_id: string
          unit?: string | null
        }
        Update: {
          as_of_date?: string | null
          id?: string
          metadata_json?: Json
          metric_group?: string
          metric_key?: string
          metric_value_numeric?: number | null
          metric_value_text?: string | null
          run_id?: string
          unit?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "analysis_metric_snapshots_run_id_fkey"
            columns: ["run_id"]
            isOneToOne: false
            referencedRelation: "analysis_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_report_blocks: {
        Row: {
          block_key: string
          block_type: string
          created_at: string
          id: string
          markdown_content: string | null
          payload_json: Json
          run_id: string
          sort_order: number
        }
        Insert: {
          block_key: string
          block_type: string
          created_at?: string
          id?: string
          markdown_content?: string | null
          payload_json?: Json
          run_id: string
          sort_order: number
        }
        Update: {
          block_key?: string
          block_type?: string
          created_at?: string
          id?: string
          markdown_content?: string | null
          payload_json?: Json
          run_id?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "analysis_report_blocks_run_id_fkey"
            columns: ["run_id"]
            isOneToOne: false
            referencedRelation: "analysis_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_run_evidence: {
        Row: {
          connector_evidence_hash: string | null
          connector_evidence_json: Json | null
          created_at: string
          evidence_kind: string
          id: string
          industry_observation_id: string | null
          market_observation_id: string | null
          owner_id: string
          run_id: string
          source_evidence_id: string | null
        }
        Insert: {
          connector_evidence_hash?: string | null
          connector_evidence_json?: Json | null
          created_at?: string
          evidence_kind: string
          id?: string
          industry_observation_id?: string | null
          market_observation_id?: string | null
          owner_id: string
          run_id: string
          source_evidence_id?: string | null
        }
        Update: {
          connector_evidence_hash?: string | null
          connector_evidence_json?: Json | null
          created_at?: string
          evidence_kind?: string
          id?: string
          industry_observation_id?: string | null
          market_observation_id?: string | null
          owner_id?: string
          run_id?: string
          source_evidence_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "analysis_run_evidence_run_id_owner_id_fkey"
            columns: ["run_id", "owner_id"]
            isOneToOne: false
            referencedRelation: "analysis_runs"
            referencedColumns: ["id", "owner_id"]
          },
        ]
      }
      analysis_runs: {
        Row: {
          archived: boolean
          attempt_count: number
          cancel_requested_at: string | null
          created_at: string
          deleted_at: string | null
          display_title: string | null
          error_code: string | null
          error_message: string | null
          final_state_json: Json | null
          finished_at: string | null
          id: string
          input_json: Json
          lease_expires_at: string | null
          lease_owner: string | null
          owner_id: string
          pause_requested_at: string | null
          rating: string | null
          retry_at: string | null
          signal: string | null
          started_at: string | null
          status: string
          system_workflow_version_id: string | null
          ticker: string | null
          trade_date: string
          updated_at: string
          workflow_version_id: string | null
        }
        Insert: {
          archived?: boolean
          attempt_count?: number
          cancel_requested_at?: string | null
          created_at?: string
          deleted_at?: string | null
          display_title?: string | null
          error_code?: string | null
          error_message?: string | null
          final_state_json?: Json | null
          finished_at?: string | null
          id?: string
          input_json?: Json
          lease_expires_at?: string | null
          lease_owner?: string | null
          owner_id: string
          pause_requested_at?: string | null
          rating?: string | null
          retry_at?: string | null
          signal?: string | null
          started_at?: string | null
          status: string
          system_workflow_version_id?: string | null
          ticker?: string | null
          trade_date: string
          updated_at?: string
          workflow_version_id?: string | null
        }
        Update: {
          archived?: boolean
          attempt_count?: number
          cancel_requested_at?: string | null
          created_at?: string
          deleted_at?: string | null
          display_title?: string | null
          error_code?: string | null
          error_message?: string | null
          final_state_json?: Json | null
          finished_at?: string | null
          id?: string
          input_json?: Json
          lease_expires_at?: string | null
          lease_owner?: string | null
          owner_id?: string
          pause_requested_at?: string | null
          rating?: string | null
          retry_at?: string | null
          signal?: string | null
          started_at?: string | null
          status?: string
          system_workflow_version_id?: string | null
          ticker?: string | null
          trade_date?: string
          updated_at?: string
          workflow_version_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "analysis_runs_system_workflow_version_id_fkey"
            columns: ["system_workflow_version_id"]
            isOneToOne: false
            referencedRelation: "system_workflow_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_runs_workflow_version_id_fkey"
            columns: ["workflow_version_id"]
            isOneToOne: false
            referencedRelation: "workflow_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      company: {
        Row: {
          code: string
          industry: string | null
          list_date: string | null
          name: string | null
          ts_code: string | null
          updated_at: string | null
        }
        Insert: {
          code: string
          industry?: string | null
          list_date?: string | null
          name?: string | null
          ts_code?: string | null
          updated_at?: string | null
        }
        Update: {
          code?: string
          industry?: string | null
          list_date?: string | null
          name?: string | null
          ts_code?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      connector_access_tokens: {
        Row: {
          cache_valid_until: string | null
          connector_instance_id: string
          credential_epoch: string
          credential_version: number
          error_code: string | null
          expires_at: string | null
          lease_id: string | null
          lease_until: string | null
          owner_id: string
          retry_after: string | null
          schema_version: number
          token_ciphertext: string | null
          token_generation: string | null
          token_key_version: string | null
          token_nonce: string | null
          updated_at: string
        }
        Insert: {
          cache_valid_until?: string | null
          connector_instance_id: string
          credential_epoch?: string
          credential_version: number
          error_code?: string | null
          expires_at?: string | null
          lease_id?: string | null
          lease_until?: string | null
          owner_id: string
          retry_after?: string | null
          schema_version: number
          token_ciphertext?: string | null
          token_generation?: string | null
          token_key_version?: string | null
          token_nonce?: string | null
          updated_at?: string
        }
        Update: {
          cache_valid_until?: string | null
          connector_instance_id?: string
          credential_epoch?: string
          credential_version?: number
          error_code?: string | null
          expires_at?: string | null
          lease_id?: string | null
          lease_until?: string | null
          owner_id?: string
          retry_after?: string | null
          schema_version?: number
          token_ciphertext?: string | null
          token_generation?: string | null
          token_key_version?: string | null
          token_nonce?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "connector_access_tokens_connector_instance_id_owner_id_fkey"
            columns: ["connector_instance_id", "owner_id"]
            isOneToOne: true
            referencedRelation: "user_connector_instances"
            referencedColumns: ["id", "owner_id"]
          },
        ]
      }
      connector_binding_sessions: {
        Row: {
          code_digest: string
          connector_instance_id: string
          consumed_at: string | null
          consumed_device_id: string | null
          created_at: string
          expires_at: string
          id: string
          invalidated_at: string | null
          owner_id: string
        }
        Insert: {
          code_digest: string
          connector_instance_id: string
          consumed_at?: string | null
          consumed_device_id?: string | null
          created_at?: string
          expires_at: string
          id?: string
          invalidated_at?: string | null
          owner_id: string
        }
        Update: {
          code_digest?: string
          connector_instance_id?: string
          consumed_at?: string | null
          consumed_device_id?: string | null
          created_at?: string
          expires_at?: string
          id?: string
          invalidated_at?: string | null
          owner_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "connector_binding_sessions_connector_instance_id_owner_id_fkey"
            columns: ["connector_instance_id", "owner_id"]
            isOneToOne: false
            referencedRelation: "user_connector_instances"
            referencedColumns: ["id", "owner_id"]
          },
          {
            foreignKeyName: "connector_binding_sessions_consumed_device_id_owner_id_con_fkey"
            columns: ["consumed_device_id", "owner_id", "connector_instance_id"]
            isOneToOne: false
            referencedRelation: "connector_bridge_devices"
            referencedColumns: ["id", "owner_id", "connector_instance_id"]
          },
        ]
      }
      connector_bridge_devices: {
        Row: {
          bridge_version: string
          connector_instance_id: string
          created_at: string
          device_fingerprint_digest: string
          device_name: string
          device_platform: string
          device_public_key: string
          device_status: string
          device_token_digest: string
          health_status: string | null
          id: string
          last_seen_at: string | null
          owner_id: string
          revoked_at: string | null
          updated_at: string
        }
        Insert: {
          bridge_version: string
          connector_instance_id: string
          created_at?: string
          device_fingerprint_digest: string
          device_name: string
          device_platform: string
          device_public_key: string
          device_status?: string
          device_token_digest: string
          health_status?: string | null
          id?: string
          last_seen_at?: string | null
          owner_id: string
          revoked_at?: string | null
          updated_at?: string
        }
        Update: {
          bridge_version?: string
          connector_instance_id?: string
          created_at?: string
          device_fingerprint_digest?: string
          device_name?: string
          device_platform?: string
          device_public_key?: string
          device_status?: string
          device_token_digest?: string
          health_status?: string | null
          id?: string
          last_seen_at?: string | null
          owner_id?: string
          revoked_at?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "connector_bridge_devices_connector_instance_id_owner_id_fkey"
            columns: ["connector_instance_id", "owner_id"]
            isOneToOne: false
            referencedRelation: "user_connector_instances"
            referencedColumns: ["id", "owner_id"]
          },
        ]
      }
      connector_capability_grants: {
        Row: {
          capability_id: string
          connector_instance_id: string
          credential_version: number
          data_delay_seconds: number | null
          expires_at: string | null
          id: string
          owner_id: string
          probe_error_code: string | null
          probe_status: string
          probed_at: string
          quota_json: Json | null
          realtime: boolean
          schema_version: number
          scope_hash: string
          scope_json: Json
          valid_until: string
        }
        Insert: {
          capability_id: string
          connector_instance_id: string
          credential_version: number
          data_delay_seconds?: number | null
          expires_at?: string | null
          id?: string
          owner_id: string
          probe_error_code?: string | null
          probe_status: string
          probed_at: string
          quota_json?: Json | null
          realtime?: boolean
          schema_version: number
          scope_hash: string
          scope_json: Json
          valid_until: string
        }
        Update: {
          capability_id?: string
          connector_instance_id?: string
          credential_version?: number
          data_delay_seconds?: number | null
          expires_at?: string | null
          id?: string
          owner_id?: string
          probe_error_code?: string | null
          probe_status?: string
          probed_at?: string
          quota_json?: Json | null
          realtime?: boolean
          schema_version?: number
          scope_hash?: string
          scope_json?: Json
          valid_until?: string
        }
        Relationships: [
          {
            foreignKeyName: "connector_capability_grants_connector_instance_id_owner_id_fkey"
            columns: ["connector_instance_id", "owner_id"]
            isOneToOne: false
            referencedRelation: "user_connector_instances"
            referencedColumns: ["id", "owner_id"]
          },
        ]
      }
      connector_definitions: {
        Row: {
          adapter_key: string | null
          availability: string
          category: string
          commercial_model: string
          commercial_status: string
          config_schema_json: Json
          created_at: string
          declared_capabilities: string[]
          description_json: Json
          enabled: boolean
          id: string
          integration_kind: string
          name_json: Json
          official_urls_json: Json
          schema_version: number
          sort_order: number
          supported_products_json: Json
          terms_version: string
          updated_at: string
        }
        Insert: {
          adapter_key?: string | null
          availability?: string
          category?: string
          commercial_model: string
          commercial_status?: string
          config_schema_json: Json
          created_at?: string
          declared_capabilities?: string[]
          description_json: Json
          enabled?: boolean
          id: string
          integration_kind: string
          name_json: Json
          official_urls_json?: Json
          schema_version?: number
          sort_order: number
          supported_products_json?: Json
          terms_version?: string
          updated_at?: string
        }
        Update: {
          adapter_key?: string | null
          availability?: string
          category?: string
          commercial_model?: string
          commercial_status?: string
          config_schema_json?: Json
          created_at?: string
          declared_capabilities?: string[]
          description_json?: Json
          enabled?: boolean
          id?: string
          integration_kind?: string
          name_json?: Json
          official_urls_json?: Json
          schema_version?: number
          sort_order?: number
          supported_products_json?: Json
          terms_version?: string
          updated_at?: string
        }
        Relationships: []
      }
      connector_usage_events: {
        Row: {
          analysis_run_id: string | null
          attempt: number
          billable_units: number
          billing_status: string
          capability_id: string
          connector_definition_id: string | null
          connector_instance_id: string | null
          conversation_id: string | null
          created_at: string
          error_code: string | null
          execution_status: string
          fallback_from: string | null
          fallback_reason: string | null
          finished_at: string | null
          id: string
          latency_ms: number | null
          owner_id: string
          provider: string
          record_count: number | null
          request_hash: string
          request_id: string
          reserved_until: string
          result_status: string | null
          route_reason: string | null
          source_scope: string
          test_data: boolean
          usage_day: string
        }
        Insert: {
          analysis_run_id?: string | null
          attempt: number
          billable_units: number
          billing_status?: string
          capability_id: string
          connector_definition_id?: string | null
          connector_instance_id?: string | null
          conversation_id?: string | null
          created_at?: string
          error_code?: string | null
          execution_status?: string
          fallback_from?: string | null
          fallback_reason?: string | null
          finished_at?: string | null
          id?: string
          latency_ms?: number | null
          owner_id: string
          provider: string
          record_count?: number | null
          request_hash: string
          request_id: string
          reserved_until?: string
          result_status?: string | null
          route_reason?: string | null
          source_scope: string
          test_data?: boolean
          usage_day?: string
        }
        Update: {
          analysis_run_id?: string | null
          attempt?: number
          billable_units?: number
          billing_status?: string
          capability_id?: string
          connector_definition_id?: string | null
          connector_instance_id?: string | null
          conversation_id?: string | null
          created_at?: string
          error_code?: string | null
          execution_status?: string
          fallback_from?: string | null
          fallback_reason?: string | null
          finished_at?: string | null
          id?: string
          latency_ms?: number | null
          owner_id?: string
          provider?: string
          record_count?: number | null
          request_hash?: string
          request_id?: string
          reserved_until?: string
          result_status?: string | null
          route_reason?: string | null
          source_scope?: string
          test_data?: boolean
          usage_day?: string
        }
        Relationships: [
          {
            foreignKeyName: "connector_usage_events_analysis_run_id_fkey"
            columns: ["analysis_run_id"]
            isOneToOne: false
            referencedRelation: "analysis_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "connector_usage_events_connector_definition_id_fkey"
            columns: ["connector_definition_id"]
            isOneToOne: false
            referencedRelation: "connector_definitions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "connector_usage_events_connector_instance_id_owner_id_fkey"
            columns: ["connector_instance_id", "owner_id"]
            isOneToOne: false
            referencedRelation: "user_connector_instances"
            referencedColumns: ["id", "owner_id"]
          },
          {
            foreignKeyName: "connector_usage_events_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          analysis_run_id: string | null
          archived: boolean
          created_at: string
          id: string
          summary: string
          title: string
          updated_at: string
          user_id: string
          workflow_version_id: string | null
        }
        Insert: {
          analysis_run_id?: string | null
          archived?: boolean
          created_at?: string
          id?: string
          summary?: string
          title?: string
          updated_at?: string
          user_id: string
          workflow_version_id?: string | null
        }
        Update: {
          analysis_run_id?: string | null
          archived?: boolean
          created_at?: string
          id?: string
          summary?: string
          title?: string
          updated_at?: string
          user_id?: string
          workflow_version_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversations_analysis_run_id_fkey"
            columns: ["analysis_run_id"]
            isOneToOne: false
            referencedRelation: "analysis_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_workflow_version_id_fkey"
            columns: ["workflow_version_id"]
            isOneToOne: false
            referencedRelation: "workflow_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_price: {
        Row: {
          close: number | null
          code: string
          high: number | null
          low: number | null
          open: number | null
          trade_date: string
          turnover: number | null
          updated_at: string | null
          volume: number | null
        }
        Insert: {
          close?: number | null
          code: string
          high?: number | null
          low?: number | null
          open?: number | null
          trade_date: string
          turnover?: number | null
          updated_at?: string | null
          volume?: number | null
        }
        Update: {
          close?: number | null
          code?: string
          high?: number | null
          low?: number | null
          open?: number | null
          trade_date?: string
          turnover?: number | null
          updated_at?: string | null
          volume?: number | null
        }
        Relationships: []
      }
      dividends: {
        Row: {
          cash_div_tax: number | null
          code: string
          div_proc: string | null
          period: string
          updated_at: string | null
        }
        Insert: {
          cash_div_tax?: number | null
          code: string
          div_proc?: string | null
          period: string
          updated_at?: string | null
        }
        Update: {
          cash_div_tax?: number | null
          code?: string
          div_proc?: string | null
          period?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      financials: {
        Row: {
          bvps: number | null
          code: string
          contract_liability_ratio: number | null
          debt_to_assets: number | null
          eps: number | null
          grossprofit_margin: number | null
          interest_debt_ratio: number | null
          ncav_ps: number | null
          netprofit_margin: number | null
          ocf_to_np: number | null
          ocf_to_np_parent: number | null
          ocfps: number | null
          period: string
          rd_ratio: number | null
          roe: number | null
          updated_at: string | null
        }
        Insert: {
          bvps?: number | null
          code: string
          contract_liability_ratio?: number | null
          debt_to_assets?: number | null
          eps?: number | null
          grossprofit_margin?: number | null
          interest_debt_ratio?: number | null
          ncav_ps?: number | null
          netprofit_margin?: number | null
          ocf_to_np?: number | null
          ocf_to_np_parent?: number | null
          ocfps?: number | null
          period: string
          rd_ratio?: number | null
          roe?: number | null
          updated_at?: string | null
        }
        Update: {
          bvps?: number | null
          code?: string
          contract_liability_ratio?: number | null
          debt_to_assets?: number | null
          eps?: number | null
          grossprofit_margin?: number | null
          interest_debt_ratio?: number | null
          ncav_ps?: number | null
          netprofit_margin?: number | null
          ocf_to_np?: number | null
          ocf_to_np_parent?: number | null
          ocfps?: number | null
          period?: string
          rd_ratio?: number | null
          roe?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      governance_events: {
        Row: {
          code: string
          description: string | null
          event_date: string
          holder: string | null
          kind: string
          ratio: number | null
          updated_at: string | null
        }
        Insert: {
          code: string
          description?: string | null
          event_date: string
          holder?: string | null
          kind: string
          ratio?: number | null
          updated_at?: string | null
        }
        Update: {
          code?: string
          description?: string | null
          event_date?: string
          holder?: string | null
          kind?: string
          ratio?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      margin: {
        Row: {
          code: string
          fin_balance: number | null
          margin_balance: number | null
          sec_balance: number | null
          trade_date: string
          updated_at: string | null
        }
        Insert: {
          code: string
          fin_balance?: number | null
          margin_balance?: number | null
          sec_balance?: number | null
          trade_date: string
          updated_at?: string | null
        }
        Update: {
          code?: string
          fin_balance?: number | null
          margin_balance?: number | null
          sec_balance?: number | null
          trade_date?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          id: string
          metadata_json: Json
          role: string
          sequence: number
          skill_ids: Json
          status: string
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string
          id?: string
          metadata_json?: Json
          role: string
          sequence?: number
          skill_ids?: Json
          status?: string
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
          metadata_json?: Json
          role?: string
          sequence?: number
          skill_ids?: Json
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      monitor_rules: {
        Row: {
          action: string
          active: boolean
          company_code: string
          company_name: string
          created_at: string
          id: string
          message: string
          params: Json
          rule_type: string
          session_id: string
          severity: string
          source_module: string
          trigger: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          action?: string
          active?: boolean
          company_code: string
          company_name?: string
          created_at?: string
          id?: string
          message?: string
          params?: Json
          rule_type: string
          session_id: string
          severity?: string
          source_module?: string
          trigger?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          action?: string
          active?: boolean
          company_code?: string
          company_name?: string
          created_at?: string
          id?: string
          message?: string
          params?: Json
          rule_type?: string
          session_id?: string
          severity?: string
          source_module?: string
          trigger?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      northbound: {
        Row: {
          code: string
          hold_ratio: number | null
          hold_shares: number | null
          trade_date: string
          updated_at: string | null
        }
        Insert: {
          code: string
          hold_ratio?: number | null
          hold_shares?: number | null
          trade_date: string
          updated_at?: string | null
        }
        Update: {
          code?: string
          hold_ratio?: number | null
          hold_shares?: number | null
          trade_date?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      sessions: {
        Row: {
          id: string
          payload: Json
          updated_at: string | null
        }
        Insert: {
          id: string
          payload: Json
          updated_at?: string | null
        }
        Update: {
          id?: string
          payload?: Json
          updated_at?: string | null
        }
        Relationships: []
      }
      system_workflow_versions: {
        Row: {
          created_at: string
          definition_json: Json
          id: string
          version: number
          workflow_key: string
        }
        Insert: {
          created_at?: string
          definition_json: Json
          id?: string
          version: number
          workflow_key: string
        }
        Update: {
          created_at?: string
          definition_json?: Json
          id?: string
          version?: number
          workflow_key?: string
        }
        Relationships: [
          {
            foreignKeyName: "system_workflow_versions_workflow_key_fkey"
            columns: ["workflow_key"]
            isOneToOne: false
            referencedRelation: "system_workflows"
            referencedColumns: ["workflow_key"]
          },
        ]
      }
      system_workflows: {
        Row: {
          created_at: string
          current_version_id: string | null
          is_active: boolean
          is_protected: boolean
          name: string
          scenario: string | null
          status: string
          updated_at: string
          workflow_key: string
        }
        Insert: {
          created_at?: string
          current_version_id?: string | null
          is_active?: boolean
          is_protected?: boolean
          name: string
          scenario?: string | null
          status?: string
          updated_at?: string
          workflow_key: string
        }
        Update: {
          created_at?: string
          current_version_id?: string | null
          is_active?: boolean
          is_protected?: boolean
          name?: string
          scenario?: string | null
          status?: string
          updated_at?: string
          workflow_key?: string
        }
        Relationships: [
          {
            foreignKeyName: "system_workflows_current_version_matches_workflow_fkey"
            columns: ["workflow_key", "current_version_id"]
            isOneToOne: false
            referencedRelation: "system_workflow_versions"
            referencedColumns: ["workflow_key", "id"]
          },
        ]
      }
      usage_events: {
        Row: {
          completed_at: string | null
          created_at: string
          id: string
          released_at: string | null
          source_id: string
          source_type: string
          status: string
          usage_type: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          id?: string
          released_at?: string | null
          source_id: string
          source_type: string
          status?: string
          usage_type: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          id?: string
          released_at?: string | null
          source_id?: string
          source_type?: string
          status?: string
          usage_type?: string
          user_id?: string
        }
        Relationships: []
      }
      user_api_keys: {
        Row: {
          api_key: string | null
          api_key_ciphertext: string | null
          created_at: string
          encryption_key_version: string | null
          encryption_nonce: string | null
          id: string
          key_last4: string | null
          provider: string
          updated_at: string
          user_id: string
        }
        Insert: {
          api_key?: string | null
          api_key_ciphertext?: string | null
          created_at?: string
          encryption_key_version?: string | null
          encryption_nonce?: string | null
          id?: string
          key_last4?: string | null
          provider: string
          updated_at?: string
          user_id: string
        }
        Update: {
          api_key?: string | null
          api_key_ciphertext?: string | null
          created_at?: string
          encryption_key_version?: string | null
          encryption_nonce?: string | null
          id?: string
          key_last4?: string | null
          provider?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_connector_instances: {
        Row: {
          api_version: string
          config_json: Json
          connection_mode: string
          connector_definition_id: string
          created_at: string
          creation_key: string | null
          credential_version: number
          deleted_at: string | null
          disabled_at: string | null
          display_name: string
          id: string
          last_checked_at: string | null
          owner_id: string
          priority: number
          probe_id: string | null
          probe_started_at: string | null
          provider_product_id: string
          schema_version: number
          secret_ciphertext: string | null
          secret_key_version: string | null
          secret_nonce: string | null
          status: string
          status_reason: string | null
          terms_accepted_at: string
          terms_version: string
          updated_at: string
          upstream_instance_id: string | null
        }
        Insert: {
          api_version: string
          config_json?: Json
          connection_mode: string
          connector_definition_id: string
          created_at?: string
          creation_key?: string | null
          credential_version?: number
          deleted_at?: string | null
          disabled_at?: string | null
          display_name: string
          id?: string
          last_checked_at?: string | null
          owner_id: string
          priority?: number
          probe_id?: string | null
          probe_started_at?: string | null
          provider_product_id: string
          schema_version?: number
          secret_ciphertext?: string | null
          secret_key_version?: string | null
          secret_nonce?: string | null
          status?: string
          status_reason?: string | null
          terms_accepted_at?: string
          terms_version: string
          updated_at?: string
          upstream_instance_id?: string | null
        }
        Update: {
          api_version?: string
          config_json?: Json
          connection_mode?: string
          connector_definition_id?: string
          created_at?: string
          creation_key?: string | null
          credential_version?: number
          deleted_at?: string | null
          disabled_at?: string | null
          display_name?: string
          id?: string
          last_checked_at?: string | null
          owner_id?: string
          priority?: number
          probe_id?: string | null
          probe_started_at?: string | null
          provider_product_id?: string
          schema_version?: number
          secret_ciphertext?: string | null
          secret_key_version?: string | null
          secret_nonce?: string | null
          status?: string
          status_reason?: string | null
          terms_accepted_at?: string
          terms_version?: string
          updated_at?: string
          upstream_instance_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_connector_instances_connector_definition_id_fkey"
            columns: ["connector_definition_id"]
            isOneToOne: false
            referencedRelation: "connector_definitions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_connector_instances_upstream_instance_id_owner_id_fkey"
            columns: ["upstream_instance_id", "owner_id"]
            isOneToOne: false
            referencedRelation: "user_connector_instances"
            referencedColumns: ["id", "owner_id"]
          },
        ]
      }
      user_data_source_preferences: {
        Row: {
          fallback_policy: string
          owner_id: string
          updated_at: string
        }
        Insert: {
          fallback_policy?: string
          owner_id: string
          updated_at?: string
        }
        Update: {
          fallback_policy?: string
          owner_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_invoices: {
        Row: {
          amount: number
          created_at: string
          currency: string
          id: string
          invoice_no: string
          paid_at: string | null
          period_end: string | null
          period_start: string | null
          status: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string
          id?: string
          invoice_no: string
          paid_at?: string | null
          period_end?: string | null
          period_start?: string | null
          status: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          id?: string
          invoice_no?: string
          paid_at?: string | null
          period_end?: string | null
          period_start?: string | null
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      user_llm_config: {
        Row: {
          api_base_url: string | null
          created_at: string
          deep_think_llm: string
          llm_provider: string
          quick_think_llm: string
          updated_at: string
          user_id: string
        }
        Insert: {
          api_base_url?: string | null
          created_at?: string
          deep_think_llm?: string
          llm_provider?: string
          quick_think_llm?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          api_base_url?: string | null
          created_at?: string
          deep_think_llm?: string
          llm_provider?: string
          quick_think_llm?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_plans: {
        Row: {
          currency: string
          features: Json
          plan_name: string
          price: number
          renews_at: string | null
          started_at: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          currency?: string
          features?: Json
          plan_name?: string
          price?: number
          renews_at?: string | null
          started_at?: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          currency?: string
          features?: Json
          plan_name?: string
          price?: number
          renews_at?: string | null
          started_at?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          id: string
          nickname: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          id: string
          nickname?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          id?: string
          nickname?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      user_webhooks: {
        Row: {
          channel: string
          updated_at: string
          user_id: string
          webhook_url: string
        }
        Insert: {
          channel: string
          updated_at?: string
          user_id: string
          webhook_url: string
        }
        Update: {
          channel?: string
          updated_at?: string
          user_id?: string
          webhook_url?: string
        }
        Relationships: []
      }
      valuation_history: {
        Row: {
          code: string
          dv_ttm: number | null
          pb: number | null
          pe: number | null
          pe_ttm: number | null
          ps: number | null
          total_mv: number | null
          trade_date: string
          updated_at: string | null
        }
        Insert: {
          code: string
          dv_ttm?: number | null
          pb?: number | null
          pe?: number | null
          pe_ttm?: number | null
          ps?: number | null
          total_mv?: number | null
          trade_date: string
          updated_at?: string | null
        }
        Update: {
          code?: string
          dv_ttm?: number | null
          pb?: number | null
          pe?: number | null
          pe_ttm?: number | null
          ps?: number | null
          total_mv?: number | null
          trade_date?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      value_agent_archives: {
        Row: {
          archived: boolean
          created_at: string
          session_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          archived?: boolean
          created_at?: string
          session_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          archived?: boolean
          created_at?: string
          session_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      watchlist: {
        Row: {
          added_at: string | null
          code: string
          name: string | null
        }
        Insert: {
          added_at?: string | null
          code: string
          name?: string | null
        }
        Update: {
          added_at?: string | null
          code?: string
          name?: string | null
        }
        Relationships: []
      }
      workflow_versions: {
        Row: {
          created_at: string
          definition_json: Json
          id: string
          version: number
          workflow_id: string
        }
        Insert: {
          created_at?: string
          definition_json: Json
          id?: string
          version: number
          workflow_id: string
        }
        Update: {
          created_at?: string
          definition_json?: Json
          id?: string
          version?: number
          workflow_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workflow_versions_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflows"
            referencedColumns: ["id"]
          },
        ]
      }
      workflows: {
        Row: {
          created_at: string
          current_version_id: string | null
          deleted_at: string | null
          id: string
          name: string
          owner_id: string
          scenario: string | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          current_version_id?: string | null
          deleted_at?: string | null
          id?: string
          name: string
          owner_id: string
          scenario?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          current_version_id?: string | null
          deleted_at?: string | null
          id?: string
          name?: string
          owner_id?: string
          scenario?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "workflows_current_version_id_fkey"
            columns: ["current_version_id"]
            isOneToOne: false
            referencedRelation: "workflow_versions"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      complete_workflow_usage: {
        Args: { p_source_id: string; p_source_type: string }
        Returns: undefined
      }
      release_workflow_usage: {
        Args: { p_source_id: string; p_source_type: string }
        Returns: undefined
      }
      reserve_connector_usage:
        | {
            Args: {
              p_attempt: number
              p_capability: string
              p_conversation?: string
              p_daily_limit: number
              p_fallback_reason?: string
              p_hash: string
              p_instance: string
              p_instance_minute_limit: number
              p_owner: string
              p_provider: string
              p_request: string
              p_run?: string
              p_source: string
              p_test: boolean
              p_total_limit: number
              p_units: number
            }
            Returns: {
              analysis_run_id: string | null
              attempt: number
              billable_units: number
              billing_status: string
              capability_id: string
              connector_definition_id: string | null
              connector_instance_id: string | null
              conversation_id: string | null
              created_at: string
              error_code: string | null
              execution_status: string
              fallback_from: string | null
              fallback_reason: string | null
              finished_at: string | null
              id: string
              latency_ms: number | null
              owner_id: string
              provider: string
              record_count: number | null
              request_hash: string
              request_id: string
              reserved_until: string
              result_status: string | null
              route_reason: string | null
              source_scope: string
              test_data: boolean
              usage_day: string
            }
            SetofOptions: {
              from: "*"
              to: "connector_usage_events"
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: {
              p_attempt: number
              p_capability: string
              p_conversation?: string
              p_daily_limit: number
              p_fallback_reason?: string
              p_hash: string
              p_instance: string
              p_owner: string
              p_provider: string
              p_request: string
              p_run?: string
              p_source: string
              p_test: boolean
              p_total_limit: number
              p_units: number
            }
            Returns: {
              analysis_run_id: string | null
              attempt: number
              billable_units: number
              billing_status: string
              capability_id: string
              connector_definition_id: string | null
              connector_instance_id: string | null
              conversation_id: string | null
              created_at: string
              error_code: string | null
              execution_status: string
              fallback_from: string | null
              fallback_reason: string | null
              finished_at: string | null
              id: string
              latency_ms: number | null
              owner_id: string
              provider: string
              record_count: number | null
              request_hash: string
              request_id: string
              reserved_until: string
              result_status: string | null
              route_reason: string | null
              source_scope: string
              test_data: boolean
              usage_day: string
            }
            SetofOptions: {
              from: "*"
              to: "connector_usage_events"
              isOneToOne: true
              isSetofReturn: false
            }
          }
      reserve_workflow_usage: {
        Args: {
          p_daily_limit: number
          p_source_id: string
          p_source_type: string
          p_total_limit: number
          p_user_id: string
        }
        Returns: string
      }
      start_conversation_turn: {
        Args: {
          p_content: string
          p_conversation_id: string
          p_daily_limit: number
          p_skill_ids: Json
          p_total_limit: number
          p_user_id: string
        }
        Returns: {
          allowed: boolean
          assistant_message_id: string
          error_code: string
          user_message_id: string
        }[]
      }
      transition_connector_usage: {
        Args: {
          p_action: string
          p_id: string
          p_owner: string
          p_result?: string
        }
        Returns: {
          analysis_run_id: string | null
          attempt: number
          billable_units: number
          billing_status: string
          capability_id: string
          connector_definition_id: string | null
          connector_instance_id: string | null
          conversation_id: string | null
          created_at: string
          error_code: string | null
          execution_status: string
          fallback_from: string | null
          fallback_reason: string | null
          finished_at: string | null
          id: string
          latency_ms: number | null
          owner_id: string
          provider: string
          record_count: number | null
          request_hash: string
          request_id: string
          reserved_until: string
          result_status: string | null
          route_reason: string | null
          source_scope: string
          test_data: boolean
          usage_day: string
        }
        SetofOptions: {
          from: "*"
          to: "connector_usage_events"
          isOneToOne: true
          isSetofReturn: false
        }
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
